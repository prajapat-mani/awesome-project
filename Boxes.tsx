import { View, Text ,StyleSheet, TouchableOpacity , FlatList} from 'react-native'
import React, { useState } from 'react'

const styles = StyleSheet.create({
 

  box: {
    borderColor: 'black',
    borderWidth: 1,
    height:30,
    width:30
  },
  box2:{
    borderColor: 'red',
    borderWidth: 1,
    height:30,
    width:30
  }
});



interface ofboxes {
  check: boolean;
  color: string;
  id:number
}

const Boxdata: ofboxes[] = [
  {color: 'pink', check: false ,id:1},
  {color: 'orange', check: false,id:2},
  {color: 'black', check: false,id:3},
  {color: 'blue', check: false,id:4},
  {color: 'yellow', check: false,id:5},
  {color: 'purple', check: false,id:6},
  {color: 'green', check: false,id:7},
];

const a:any=[];
export default function Boxes() {
  let i=0;
  
const[boxesdata,setBoxesdata]=useState<any[]>(Boxdata)



  const [change,setChange]=useState(false)

const boxhandler=(index:any)=>{
  
 const data= boxesdata.map((val ,ind)=>{
  
if (ind===index){
  
 if(val.check===false){

  
    a.push(val.id)
  
  
 
 }
  return {...val,check:!val.check}
}
else {
  return val

  }
  })
setBoxesdata(data)

console.log(a,"aaa");

}

function func1(val:any){
 

  // val.item.check===false? styles.box:styles.box2
  return <TouchableOpacity onPress={()=>boxhandler(val.index)} style={val.item.check===false?{borderColor:val.item.color ,height:30, width:30, borderWidth:2}:styles.box2}></TouchableOpacity>
}

  return (
    <View>
      

      <FlatList data={boxesdata} renderItem={func1} />
    </View>
  )
}