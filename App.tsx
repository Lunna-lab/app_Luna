import React from "react";
import { View,Text, StyleSheet, Image, TextInputComponent, TextInput, TouchableOpacity } from "react-native";

const estilos=StyleSheet.create({
contenedor:{
  width:'100%',
  padding:20,
  backgroundColor: '#4f3e80',
  height: '100%',
  marginTop:0 

},
imagen:{
width:'100%',
  padding:20,
  backgroundColor: '#4f3e80',
  height: '50%',
  marginTop:10,
  borderRadius: 15 
},
texto:{
  fontSize:50,
  color: 'black'
},
Boton:{
  fontFamily:'Comic Sans MS',
  borderColor:'black',
  borderWidth:1.2,
  borderRadius:10,
  marginTop:15,
  width:45,
  height: 20,
  backgroundColor:'#ffffff'
},
Input:{
  borderColor:'black',
  borderWidth:1.5,
  borderRadius:15,
  marginTop:20
}

})
export default function App(){
  return(
  <View style={estilos.contenedor}>
    <Text style={estilos.texto}>Buenos días</Text>
    <View>
     <TextInput placeholder="Escriba" style={estilos.Input}/>
     <TouchableOpacity style={estilos.Boton}>
      <Text>
        Aqui
      </Text>
     </TouchableOpacity>
    </View>
   <Image source={require('./img/hola.jpg')} style={estilos.imagen}/>
  </View>
)
}
