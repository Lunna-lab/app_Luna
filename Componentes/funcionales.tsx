import React from "react";
import{ View, Text, Button, TouchableOpacity } from "react-native";
import estilos from "./style";
import { Task } from './Tareas';

interface Itemprops{
    item: Task
    markDone:()=> void
    deleteF: ()=> void
}
export default function RenderItem({ item, markDone, deleteF }: Itemprops){
   return ( 
  <View style={estilos.dataTasks}>
    <TouchableOpacity>
        <Text style={item.done ? estilos.textdone:estilos.texto}>{item.titulo}</Text>
        <Text style={estilos.letras}>{item.date.toDateString()}</Text>
    </TouchableOpacity>
    {
    item.done &&  
    (
        <TouchableOpacity style={estilos.botoneliminar} onPress={deleteF}>
            <Text style={estilos.botonE}>Deshacer</Text>
        </TouchableOpacity>

    )}
  </View>
  );}