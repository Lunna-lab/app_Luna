import React, { useState } from "react"; 
import { View, Text, TextInput,StyleSheet, Image,Button,Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';

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
    textAlign:'center',
    alignSelf:'center',
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
  const[nombre,setNombre]=useState("");
  const[correo,setCorreo]=useState("");
  const[documento,setDocumento]=useState("");
  const[telefono,setTelefono]=useState("");
  const[usuario,setUsuario]=useState("");
  const[clave,setClave]=useState("");
  const[numerodedocumento,setnumerodeDocumento]=useState("");

  const handlerSubmit=async() => {
    if (!nombre || !correo || !documento || !numerodedocumento || !telefono || !usuario || !clave )
    {
      Alert.alert('Todos los campos son obligatorios');
    }
    try{
      const res = await fetch("http",{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          nombre,
          correo,
          numerodedocumento,
          telefono,
          usuario,
          clave,
        })
      })     
       const data = await res.json();
      if(res.ok){
        Alert.alert ('Datos enviados')
        setNombre('');
        setCorreo('');
        setnumerodeDocumento('');
        setTelefono('');
        setUsuario('');
        setClave('');
      }
    }catch (e) {
      Alert.alert('No se pudo conectar al servidor')
    }
  }
    

 
  return (
  
    <View style={estilos.contenedor2}>
        <Image source={require('../img/top.jpg')} style={estilos.imagen}/>
      <View>
        <Text style={estilos.TextoU}>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder="Escribe aqui"
          style={estilos.Input}
          placeholderTextColor="#aaa"
        />
      </View>
      <View>
        <Text style={estilos.TextoU}>Correo</Text>
        <TextInput
          value={correo}
          onChangeText={setCorreo}
          placeholder="Escribe aqui..."
          style={estilos.Input}
          placeholderTextColor="#aaa"
        />
      </View>

      <Picker
        selectedValue={documento}
        style={estilos.Input}
        onValueChange={(itemValue) => setDocumento(itemValue)}
      >
        <Picker.Item label="Cedula" value="Cedula" />
        <Picker.Item label="Tarjeta de identidad" value="Tarjeta de identidad" />
        <Picker.Item label="Pasaporte" value="Pasaporte" />
      </Picker>

      <View>
        <Text style={estilos.TextoU}>Numero de documento</Text>
        <TextInput
          value={numerodedocumento}
          onChangeText={setnumerodeDocumento}
          placeholder="Escribe aqui..."
          style={estilos.Input}
          placeholderTextColor="#aaa"
        />
      </View>

      <View>
        <Text style={estilos.TextoU}>Telefono</Text>
        <TextInput
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Escribe aqui..."
          style={estilos.Input}
          placeholderTextColor="#aaa"
        />
      </View>
      <View>
        <Text style={estilos.TextoU}>Usuario</Text>
        <TextInput
          value={usuario}
          onChangeText={setUsuario}
          placeholder="Escribe aqui..."
          style={estilos.Input}
          placeholderTextColor="#aaa"
        />
      </View>
      <View>
        <Text style={estilos.TextoU}>Clave</Text>
        <TextInput
          value={clave}
          onChangeText={setClave}
          placeholder="Escribe aqui..."
          style={estilos.Input}
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>

      <Button title="Registrar" onPress={handlerSubmit} />
    </View>
  );
}