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
   return ( 
  <View style={estilos.dataTasks}>
    <TouchableOpacity onPress={()=>markDone(item)}>
        <Text style={item.done ? estilos.textdone:estilos.texto}>{item.titulo}</Text>
        <Text style={estilos.letras}>{new Date(item.date).toDateString()}</Text>
    </TouchableOpacity>
     
    {
    item.done &&  
    (
        <TouchableOpacity style={estilos.botoneliminar} onPress={()=>deleteF(item)}>
            <Text style={estilos.botonE}>Deshacer</Text>
        </TouchableOpacity>

    )}
  </View>
  );}