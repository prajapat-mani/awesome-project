import { View, Text} from 'react-native'
import React ,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import Reducer from './redux/Reducer'


export default function Header() {
  const [cartitem,setcartitem]=useState()

  const cartdata=useSelector((state:any)=>state.Reducer
  )
 
 useEffect(()=>{

  setcartitem(cartdata.length)
 },[cartdata])
 
 

 

 

  return (

    
    <View style={{backgroundColor:"orange", alignItems:"flex-end"}}>
      <Text>{cartitem}</Text>
    </View>
  )
}