import React from "react";
import{ View, Text, TouchableOpacity } from "react-native";
import estilos from "./style";
import {Task} from './Tareas';

interface Itemprops{
    item: Task
    markDone:(task:Task)=> void
    deleteF: (task:Task)=> void
}

export default function RenderItem({ item, markDone, deleteF }: Itemprops){
    const formatDateTime = (date: Date) => {
        return date.toLocaleDateString('es-Es',{
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }
    const isOverdue = () => {
        return new Date()> item.date && !item.done;
    }
    const getStatusText = () => {
        if (item.done) {
            return 'Completada';
        }
        if (isOverdue()) {
            return 'Vencida';
        }
        return 'Pendiente';
    };
    const getStatusStyle = () => {
    if (item.done) 
        return estilos.statusCompleted;
    if (isOverdue()) 
        return estilos.statusOverdue;
    return estilos.statusPending;
  };

   return ( 
  <View style={[estilos.dataTasks, isOverdue() && estilos.overdueTask]}>
    <TouchableOpacity
    onPress={()=>markDone(item)}
    >
       <Text style={item.done ? estilos.textdone : estilos.letras}>
          {item.titulo}
        </Text>
        
        <Text style={estilos.dateText}>
          📅 {formatDateTime(item.date)}
        </Text>
        
        <Text style={[estilos.statusText, getStatusStyle()]}>
          {getStatusText()}
        </Text>
        {!item.done && item.date > new Date() && (
            <Text>Notificacion Programada</Text>
        )}
      </TouchableOpacity>
      
    {
    item.done &&  (
        <TouchableOpacity 
          style={estilos.botoneliminar} 
          onPress={() => deleteF(item)}
        >
          <Text style={estilos.botonE}>🗑️ Eliminar</Text>
        </TouchableOpacity>
      )}
  </View>
  );}