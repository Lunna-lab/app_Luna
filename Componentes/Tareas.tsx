import React,{useEffect, useState} from 'react';
import { View,Text, TextInput, Image, TouchableOpacity, FlatList, Alert, AppState } from 'react-native';
import estilos from './style';
import RenderItem from './funcionales';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';

const tasks = [
];
export interface Task {
  titulo: string,
  done: boolean,
  date: Date
  id: string
  notificationId?: number
};

export default function Tareas() {
    const [text, setText] = useState('');
    const [tasks, setTask] = useState<Task[]>([]);
    const [showDatePiker,setshowDatePiker] = useState(false);
    const [showTimePiker,setshowTimePiker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
      PushNotification.configure({
        onNotification: function(notification:any) {
          console.log('Notification:', notification);
          if (notification.data && notification.data.taskId) {
            checkAndUpdateOverdueTasks();
        }
      },
      requestPermissions: false
    })
    PushNotification.createChannel({
      channelId: 'task-reminders',
      channelName: 'Recordar las tareas',
      channelDescription: 'Tarea programada',
      playSound: true,
      soundName: 'default',
      importance: 4,
      vibrate: true,
    }, 
    
    (created:boolean) => console.log(`Canal ${created ? 'creado' : 'ya existía o falló al crearse'}`)
  )
  getData();
  const handledAppStateChange = (nextAppState: string) => {
    if (nextAppState === 'active') {
      checkAndUpdateOverdueTasks();
    }
  }
  const subscription = AppState.addEventListener('change',handledAppStateChange
  );
  return () => {
    subscription.remove();
  }
}, []);

const checkAndUpdateOverdueTasks= async () => {
  try{
    const value =await AsyncStorage.getItem('my-Todo');
    if(value!== null){
      const storedTasks: Task[] = JSON.parse(value);
      const tasksWithDates = storedTasks.map((task: any) => ({
        ...task,
        date: new Date(task.date)
    }));
  setTask([...tasksWithDates]);
}
} catch (e) {
    console.log('Error checking overdue tasks:', e);
}
}
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
        const  tasksWithDates = Tlocals.map((task: any) => ({
          ...task,
          date: new Date(task.date)
        }));
        setTask(tasksWithDates)
      }
    }
    catch(e){
    console.log('Error getting data:',e);
    }
  };
  const scheduleNotification = (task: Task) => {
    const now= new Date();
    const taskDate=task.date;
    if (taskDate > now) {
      const notificationId = Math.floor(Math.random() * 1000000);
        PushNotification.localNotificationSchedule({
          channelId: 'task-reminders',
          id: notificationId,
          title: 'Recordatorio de tarea',
          message: `Es hora de: ${task.titulo}`,
          date: taskDate,
          data: {
            taskId: task.id,
            taskTitle: task.titulo,
          },
          allowWhileIdle: true,
          repeatType: undefined,
        });
        return notificationId;
      }
      return undefined
    }
    const cancelNotification = (notificationId: number) => {
      PushNotification.cancelLocalNotification({id: notificationId.toString()});
    }
    const generateTaskId = () => {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9)
    }
  
    const addTask = () => {
       if (text.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa una tarea');
      return;
      }
      
    const tmp = [...tasks];
    const taskId = generateTaskId();
    const newTasks: Task= {
        id: taskId,
        titulo: text.trim(),
        done: false,
        date: selectedDate,
        
      }
      const notificationId = scheduleNotification(newTasks);
      if (notificationId){
        newTasks.notificationId = notificationId;
      }
      tmp.push(newTasks);
      setTask(tmp);
      storeData(tmp);
      setText('');
      setSelectedDate(new Date());
      if (notificationId) {
        Alert.alert(
          'Tarea programada',
           `La tarea "${newTasks.titulo}" ha sido programada para ${formatDateTime(newTasks.date)}`);
      }
    };
    const markDone = (task:Task)=>{
    const tmp=[...tasks]
    const index=tmp.findIndex(tu=>tu.id===task.id)
    if(index === -1){
      tmp[index].done=!tmp[index].done
      if (tmp[index].done && tmp[index].notificationId) {
        cancelNotification(tmp[index].notificationId);
      }
      else if (!tmp[index].done && tmp[index].date > new Date()) {
        const newNotificationId = scheduleNotification(tmp[index]);
        if (newNotificationId) {
          tmp[index].notificationId = newNotificationId;
        }
      }
      setTask(tmp)
      storeData(tmp)
    }

  };

   const deleteF = (task:Task)=>{
    Alert.alert(
      'Eliminar tarea?',
      'Quieres eliminar la tarea?',
      [
        {text: 'Cancelar',style: 'cancel'},
        {text: 'Eliminar',
         style: 'destructive',
         onPress: () => {
         const tmp=[...tasks]
         const index=tasks.findIndex(tu=>tu.id===task.id)
         if(index !== -1){
          if(task.notificationId){
            cancelNotification(task.notificationId);
          }
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
      setSelectedDate(date);
    }
  }
  const onTimeChange = (event:any,time?: Date)=>{
    setshowTimePiker(false);
    if(time){
      const NDT= new Date(selectedDate);
      NDT.setHours(time.getHours());
      NDT.setMinutes(time.getMinutes());
      setSelectedDate(NDT);
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
    const testNotification = () => {
      PushNotification.localNotification({
        channelId: 'task-reminders',
        title: 'Test Notification',
        message: 'la tarea ha sido programada',
      });
    }
  return(
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Mis tareas</Text>

      <View style={estilos.Ctareas}>
        <TextInput 
        placeholder="Escriba"
        style={estilos.input}
        value={text}
        onChangeText={(t:string)=>setText(t)}
        />

        <TouchableOpacity
        style={estilos.boton}
        onPress={addTask}
        >
          <Text style={estilos.letras}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.dateTimeContainer}>
          <TouchableOpacity
          style={estilos.dateButton}
          onPress={()=>setshowDatePiker(true)}
          >
            <Text>Fecha</Text>
          </TouchableOpacity>

           <TouchableOpacity
           onPress={()=>setshowTimePiker(true)}
           style={estilos.dateButton}
           >
            <Text>Hora</Text>
          </TouchableOpacity>
        </View>

        <Text>
          Programado para: {formatDateTime(selectedDate)}
        </Text>
        
      <View style={estilos.taskListContainer}>
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
       showsVerticalScrollIndicator={false}
        />
      </View>

      {showDatePiker && (
        <DateTimePicker
        value={selectedDate}
        mode='date'
        display='default'
        onChange={onDateChange}
        minimumDate={new Date()}
        />
      )}

      {showTimePiker && (
        <DateTimePicker
        value={selectedDate}
        mode='time'
        display='default'
        onChange={onTimeChange}
        is24Hour={true}
        />
      )}
    </View>
  );
    }