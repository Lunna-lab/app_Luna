import React,{useState} from 'react';
import { View,Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import estilos from './style';
import RenderItem from './funcionales';

const task = [

];
export interface Task {
  titulo: string,
  done: boolean,
  date: Date
};

export default function Tareas(){
    const [text, setText] = useState('');
    const [task, setTask] = useState<Task[]>([]);
    const addTask = () => {
      const tmp = [...task];
      const newTask= {
        titulo: text,
        done: false,
        date: new Date()
      }
      tmp.push(newTask);
      setTask(tmp);
    }
    const markDone=()=>{console.log('marcado')}
    const deleteF=()=>{console.log('borrado')}
  return(
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Mis tareas</Text>
      <View style={estilos.Ctareas}>
        <TextInput placeholder="Escriba" style={estilos.input}
        value={text} onChangeText={(t:string)=>setText(t)}/>
        <TouchableOpacity style={estilos.boton} onPress={addTask}>
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
        data={task}
        />
      </View>
    </View>
  );
}