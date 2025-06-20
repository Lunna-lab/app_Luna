import React,{use, useEffect, useState} from 'react';
import { View,Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import estilos from './style';
import RenderItem from './funcionales';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
const tasks = [
];
export interface Task {
  titulo: string,
  done: boolean,
  date: Date
};

export default function Tareas(){
    const [text, setText] = useState('');
    const [tasks, setTask] = useState<Task[]>([]);
    const [showDatePiker,setshowDatePiker] = useState(false);
    const [showTimePiker,setshowTimePiker] = useState(false);
    const [selectDate,setselectData]=useState(new Date);

    const storeData=async (value:Task[])=>{
    try{
      await AsyncStorage.setItem('my-Todo',JSON.stringify(value))
    }
    catch(e){
      console.log('Error storing data:',e);
    }
  }
    const getData= async()=>{
      try{
        const value= await AsyncStorage.getItem('my-Todo')
        if(value !== null){
        const Tlocals=JSON.parse(value)
        const TDate = Tlocals.map((L: any) => ({
          ...L,
          date: new Date(TDate)
        }));
        setTask(TDate)
      }
    }
    catch(e){
    console.log('Error getting data:',e);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  
    const addTask = () => {
      const tmp = [...tasks];
      const newTasks= {
        titulo: text.trim(),
        done: false,
        date: selectDate,
      }
      tmp.push(newTasks);
      setTask(tmp);
      storeData(tmp);
      setText('');
      setselectData(new Date());
    }
    const markDone = (task:Task)=>{
    const tmp=[...tasks]
    const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
    if(index === -1){
      tmp[index].done=!tmp[index].done
      setTask(tmp)
      storeData(tmp)
    }
   
  };

   const deleteF = (task:Task)=>{
    Alert.alert(
      'Eliminar tarea',
      'Quieres eliminar la tarea?',
      [
        {text: 'Cancelar',style: 'cancel'},
        {text: 'Eliminar',
         style: 'destructive',
         onPress: () => {
         const tmp=[...tasks]
         const index=tmp.findIndex(tu=>tu.titulo===task.titulo)
         if(index !== -1){
          tmp.splice(index,1);
          setTask(tmp);
          storeData(tmp);
         }
         }
        }
      ]
    )
    
  };
  const onDateChange = (event:any,date?: Date)=>{
    setshowDatePiker(false);
    if(date){
      setselectData(date);
    }
  }
  const onTimeChange = (event:any,time?: Date)=>{
    setshowTimePiker(false);
    if(time){
      const NDT= new Date(selectDate);
      NDT.setHours(time.getHours());
      NDT.setMinutes(time.getMinutes());
      setselectData(NDT);
    }
  }
  const formatDateTime = (date:Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  }
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
        <View /* style={estilos.DTC} */>
          <TouchableOpacity onPress={()=>setshowDatePiker(true)}>
            <Text>Fecha</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={()=>setshowTimePiker(true)}>
            <Text>Hora</Text>
          </TouchableOpacity>
        </View>
       {/*  <Text>
          Programado para: {formatDateTime(selectDate)}
        </Text> */}
        <FlatList 
        data={tasks}
        keyExtractor={(item, index) => `${item.titulo}-${index}`}
        renderItem={({item})=>(
            <RenderItem
                item={item}
                markDone={markDone}
                deleteF={deleteF}
            />
        )}
       
        />
      </View>
      {showDatePiker && (
        <DateTimePicker
        value={selectDate}
        mode='date'
        display='default'
        onChange={onDateChange}
        minimumDate={new Date()}
        />
      )}
      {showTimePiker && (
        <DateTimePicker
        value={selectDate}
        mode='time'
        display='default'
        onChange={onTimeChange}
        is24Hour={true}
        />
      )}
    </View>
  );
}

