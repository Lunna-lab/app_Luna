import React from "react";
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
   marginLeft: 85,

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

   export default function App(){
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
            <TouchableOpacity >
              <Text style={estilos.boton}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={estilos.boton}>Registrar</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>

    )
   } 
   