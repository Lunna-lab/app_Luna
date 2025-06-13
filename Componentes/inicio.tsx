import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootList } from './App';
import { View,Text, StyleSheet, Image, TextInputComponent, TextInput, TouchableOpacity, Dimensions, FlatList, ScrollView } from "react-native";
const estilos=StyleSheet.create({
contenedor:{
  flexDirection:'row',
  width:'100%',
   padding:20,
   backgroundColor: '#000000',
   height: '100%',
   marginTop:0 
},
  fondo:{
    backgroundColor: '#000000'
  },
  boton:{
   borderColor:'black',
   borderWidth:1.2,
   borderRadius:10,
   marginTop:20,
   marginHorizontal:20,
   width:Dimensions.get("screen").width*0.50,
   justifyContent:'center',
   alignItems:'center',
   textAlign:'center',
   backgroundColor:'#FFFFFF',
   alignSelf:'center',

  },
  Texto:{
    fontSize: 35,
    color: '#FFFFFF',
    textAlign:'center'
  },
  TextoU:{
    fontSize: 20,
    color: '#FFFFFF',
    textAlign:'center'
  },
  imagen:{
  width:100,
   padding:200,
   marginTop:10,
   alignSelf:'center',
   height: 25

  },
  Input:{
    borderBlockColor: '#FFFFFF',
    borderBottomWidth:1.5,
    borderRadius:15,
    flex:1,
    borderColor : '#FFFFFF',
    textAlign:'center',
    color: '#FFFFFF',
  }
}
)
type InicioScreen=StackNavigationProp<RootList,'Inicio'>

type Props={
    navigation: InicioScreen
 }

   export default function Inicio({navigation}:Props){
    const handleIniciar=()=>{
        navigation.navigate('Tareas');
    }
     const handleRegistro=()=>{
        navigation.navigate('Registro');
    }
    return(
      <View style={estilos.contenedor}>
        <ScrollView>
          <Text style={estilos.Texto}>✮ ⋆ ˚｡ Musica ⋆｡°✩</Text>
          <Image source={require('../img/disco.jpg')} style={estilos.imagen}/>
          <View>
          <Text style={estilos.TextoU}>✩ ───── 「Usuario」───── ✩</Text>
          <TextInput placeholder="Escriba..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}/>
          <Text style={estilos.TextoU}>✩ ───── 「Password」───── ✩</Text>
          <TextInput placeholder="Password..." placeholderTextColor={"#FFFFFF"} style={estilos.Input}></TextInput>
            <TouchableOpacity onPress={handleIniciar}>
              <Text style={estilos.boton}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegistro}>
              <Text style={estilos.boton}>Registrar</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>

    )
   } 