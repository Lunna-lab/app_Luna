// import React from "react";
// import { View,Text, StyleSheet, Image, TextInputComponent, TextInput, TouchableOpacity, Dimensions, FlatList, ScrollView } from "react-native";

// const estilos=StyleSheet.create({
// contenedor:{
//   width:'100%',
//   padding:20,
//   backgroundColor: '#4f3e80',
//   height: '100%',
//   marginTop:0 

// },
// imagen:{
// width:200,
//   padding:20,
//   backgroundColor: '#4f3e80',
//   marginTop:10,
//   borderRadius: 15,
//   height: 200,
//   alignSelf:'center'
// },
// texto:{
//   fontSize:50,
//   color: 'black'
// },
// Boton:{
//   fontFamily:'Comic Sans MS',
//   borderColor:'black',
//   borderWidth:1.2,
//   borderRadius:10,
//   marginTop:15,
//   marginHorizontal:13,
//   width:Dimensions.get("screen").width*0.25,
//   backgroundColor:'#FFFFFF',
//   justifyContent:'center',
//   alignItems:'center'
// },
// Input:{
//   borderColor:'black',
//   borderWidth:1.5,
//   borderRadius:15,
//   flex:1
// },
// letras:{
//   fontSize:20,
//   color:'#FFFFFF',
//   justifyContent:'center',
//   alignItems: 'center',
//   display:'flex',
//   textAlign:'center',
//   marginTop:15,
// },
// tareas:{
// flexDirection: 'row',
// justifyContent:'space_between',
// grap:20,
// marginTop:20
// }
// })
// const task=[{
//   titulo:"1.Estudiar",
//   done:false,
//   date:new Date()
// },
// { titulo:"2.Jugar",
//   done:false,
//   date:new Date()
// },

// {titulo:"3.Caminar",
//   done:false,
//   date:new Date()

// },
// { titulo:"4.Comer",
//   done:false,
//   date:new Date()
// },

// {titulo:"5.Disfrutar",
//   done:false,
//   date:new Date()

// },
// { titulo:"6.Ver",
//   done:false,
//   date:new Date()
// },

// {titulo:"7.Correr",
//   done:false,
//   date:new Date()

// },
// { titulo:"8.Viajar",
//   done:false,
//   date:new Date()
// }

// ]
// interface Task{
//   titulo:string,
//   done:boolean,
//   date:Date
// }
// function renderItem({item}:{item:Task}){
//   return <Text style={estilos.letras}>{item.titulo}</Text>
// }
// export default function App(){
//   return(
//   <View style={estilos.contenedor}>
//     <ScrollView>
//     <Text style={estilos.texto}>Buenos días</Text>
//     <View style={estilos.tareas}>
//      <TextInput placeholder="Escriba" style={estilos.Input}/>
//      <TouchableOpacity style={estilos.Boton}>
//       <Text>
//         Aqui
//       </Text>
//      </TouchableOpacity>
//     </View>
//     <View>
//       <FlatList
//       renderItem={renderItem}
//       data={task}
//       />
//     </View>
//    <Image source={require('./img/hola.jpg')} style={estilos.imagen}/>
//    </ScrollView>
//   </View>
// )
// }

