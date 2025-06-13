import React from "react"; 
import { View, Text, TextInput,StyleSheet, Image } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
const estilos=StyleSheet.create({
contenedor2:{
  backgroundColor: '#000000',
  padding: 20,
  height: '100%',
  marginTop: 0,
},
  Texto:{
    fontSize: 35,
    color: '#000000',
  },
  TextoU:{
    fontSize: 20,
    color: '#FFFFFF',
    textAlign:'center'
  },
  imagen:{
  width:450,
   padding:20,
   alignSelf:'center',
   height: 100

  },
  Input:{
    borderBottomWidth:1.5,
    borderRadius:15,
    flex:1,
    borderColor : '#FFFFFF',
    textAlign:'center',
    color: '#FFFFFF',
  }
}
)
export default function Registro() {
  return (
  
    <View style={estilos.contenedor2}>
        <Image source={require('../img/top.jpg')} style={estilos.imagen}/>
      <View>
        <Text style={estilos.TextoU}>Nombre</Text>
      <TextInput placeholder="Escribe aqui" placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>Correo</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>TD</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>Numero de documento</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>Telefono</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>Usuario</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
      <View>
        <Text style={estilos.TextoU}>Clave</Text>
      <TextInput placeholder="Escribe aqui..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}>
        
      </TextInput>
      </View>
    </View>

  )
}