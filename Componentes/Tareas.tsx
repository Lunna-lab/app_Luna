import React from 'react';
import { View,Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import estilos from './style';
import RenderItem from './funcionales';

const tasks = [{
  titulo:'Estudiar',
  done:false,
  date:new Date(),
},
{
  titulo:'Jugar',
  done:false,
  date:new Date(),
},
{
  titulo:'Caminar',
  done:false,
  date:new Date(),
},
];
export interface Task{
  titulo:string,
  done:boolean,
  date:Date
}

export default function Tareas(){
    const markDone=()=>{console.log('marcado')}
    const deleteF=()=>{console.log('borrado')}
  return(
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Mis tareas</Text>
      <View style={estilos.Ctareas}>
        <TextInput placeholder="Escriba" style={estilos.input}/>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.letras}>
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
        renderItem={({item})=>(
            <RenderItem
                item={item}
                markDone={markDone}
                deleteF={deleteF}
            />
        )}
        data={tasks}
        />
      </View>
    </View>
  );
}