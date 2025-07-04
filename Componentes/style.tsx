import { StyleSheet, Dimensions } from 'react-native';

const estilos = StyleSheet.create({
  
  fondo:{
   flex:1,
},
 contenedor:{
   flex:1,
    alignItems:'center',
    justifyContent:'center',
    gap:20,
  },
  letras:{
    fontSize:25,
    color:'#000000',
  },
  texto:{
    fontSize:50,
    color:'#000000',
  },
  input:{
    width:'80%',
    height:40,
    borderColor:'#1ea541 ',
    borderWidth:1.5,
    borderRadius:15,
    flex:1,
  },
  emoji:{
    width:50,
    height:50,
  },
  boton:{
    width:Dimensions.get('screen').width * 0.25,
    backgroundColor:'green',
    borderColor:'black',
    borderWidth:1.5,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  Ctareas:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10,
    marginTop:10,
  },
  // Nuevos estilos para selectores de fecha y hora
   dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    gap: 10,
  },
  dateButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedDateTime: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontWeight: '500',
  },
  //estilos para lista
   taskListContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  dataTasks:{
    paddingVertical:20,
    borderBottomColor:'#6f6f6f',
    borderBottomWidth:5,
     flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  Abotones:{
        flexDirection:'row',
        gap:30,
},
  picker:{
          width:'80%',
          height:40,
          borderColor:'black',
          borderWidth:3,
          borderRadius:15,
          backgroundColor:'white', 
},
overdueTask: {
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  taskContent: {
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  statusCompleted: {
    color: '#28a745',
  },
  statusPending: {
    color: '#007AFF',
  },
  statusOverdue: {
    color: '#dc3545',
  },
  textdone:{
          fontSize:20,
          color:'black',
          textDecorationLine:'line-through',
  },
  botoneliminar:{
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
      
  },
    botonE:{
          color:'white',
          fontSize:20,
          fontWeight: 'bold',
    },
});
export default estilos;
