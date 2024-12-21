import {Platform, StyleSheet} from 'react-native';

const ExStyle = StyleSheet.create({
  textbox: {
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightgreen',
    margin: 12,
    borderWidth: 2,
    borderColor: 'yellow',
    // height: 100,
    // width: 150,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputtext: {
    fontSize: 30,
    color: 'blue',
    borderWidth: 3,
    borderColor: 'red',
    margin: 20,
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
    
  },
  btn: {
    marginBottom: 20,
  },
  head: {
    fontSize: 35,
    textAlign: 'center',
    margin: 35,
    color: 'lime',
  },
  griddrow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewtxt: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'lime',
  },
  texttxt: {
    fontSize: 28,
    margin: 10,
    color: 'blue',
    backgroundColor: 'orange',
    flex: 1,
    textAlign: 'center',
  },
  main: {
    flex: 1,
  },
  main1: {
    flex:1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap:"wrap",
    // flexDirection:"row",
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  btn1: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'gray',
    margin: 10,
    padding: 10,
    shadowColor: 'green',
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 10,
  },
  radio1: {
    color: 'black',
    fontSize: 20,
    margin: 5,
  },
  radio2: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio3: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
  },
  main2: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  modalView1:{
    backgroundColor:"skyblue",
    padding:55,
    borderRadius:20,
    shadowColor:"white",
    elevation:7
  },
  textView:{
    fontSize:33,
    color:"black",
    marginBottom:30
  },
  platformstyle:{
    color:Platform.OS=="android"?"orange":"skyblue",
    fontSize:25,
    textAlign:"center"
  },
  modalcust:{
    backgroundColor:'rgba(250,252,256,.5)',
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  container:{
    padding:80,
    // height:300,
    // width:300,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
  },
});
export default ExStyle;
