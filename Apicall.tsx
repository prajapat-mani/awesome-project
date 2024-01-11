import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Apicall() {

const [data,setData]=useState<any[]>([])

const getapidata= async ()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
let result:any= await fetch(url)
result=await result.json();

setData(result)

}
console.log(data,'dataaa');

const apidata=(value:any)=>{
return <Text>ID-{value.item.id} Title-{value.item.title}</Text>
}
    useEffect(()=>{
getapidata()
    },[])
  return (
    <View>
<FlatList data={data} renderItem={apidata}/>
  

      <Text>Apicall</Text>

      
    </View>
  )
}