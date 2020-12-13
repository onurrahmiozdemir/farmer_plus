import {StyleSheet,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window')
const Styles=StyleSheet.create({
container:{
width:width/2,
height:height*.3,
justifyContent:'center',
alignItems:'center'
},
item:{
    width:'90%',
    height:'90%',
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'#29CA30',
    borderWidth:2
   
},
title:{
    color:'#29CA30',
    fontSize:20,
    fontWeight:'bold'
},
row:{
flexDirection:'row'
},
left10:{
marginLeft:7
},
twoText:{
color:'#29CA30',
fontWeight:'bold',
marginBottom:-10,
marginLeft:10
},
mText:{
    color:'#29CA30',
    fontWeight:'bold'
},
subTitle:{
    color:'#29CA30',
    fontSize:17,
    marginTop:7
    
},
textContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})

export default Styles;