import {useState} from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {FlatList, View, Text,Button} from 'react-native';
import CheckBox from "@react-native-community/checkbox"


const Newtask = ({NavigationTask}:any) => {

interface arrofobj{
    mobilename:string;
    prize:number;
    checked:boolean;

}


  const arr: arrofobj[] = [
    {mobilename: 'nokia', prize: 5999, checked:false},
    {mobilename: 'jio', prize: 6999, checked:false},
    {mobilename: 'realme', prize: 7999, checked:false},
    {mobilename: 'poco', prize: 8999, checked:false},
  ];

  const [data, setData] = useState<any[]>(arr);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [isSelected, setSelection] = useState<number>(0);

 const checkBoxHandler=(index:any)=>{

  const filtereddata=data.map((val,ind)=>{

    if(ind===index){
      if(val.checked===false){
      setFiltered([...filtered,val])
      setSelection(isSelected+val.prize)
      }
      else{
        if(val.checked===true){
          setSelection(isSelected-val.prize)
        }
      }
      return {...val,checked:!val.checked}
    }
    else{
      return val
    }
    
})

setData(filtereddata)


 }

  const renderdata = (value: any) => {
    return (
      <View>



        <Text>
          {value.item.mobilename}
          </Text>

          <Text>{value.item.prize}
        </Text>
        
        <CheckBox value={value.item.checked} onValueChange={()=>checkBoxHandler(value.index)} />

        {/* <Button title="add to cart" onPress={()=>cartvalue(value.index)}></Button> */}
       
      </View>
    );
  };



  function finalcartvalue(value:any){

    return <View><Text style={{margin:10}}> {value.item.mobilename}{value.item.prize} </Text><Button title='remove from cart'/></View>   

  }
  return (
    <View>
      <FlatList data={data} renderItem={renderdata} />

<View>

    <Text style={{fontSize:50}}> Your Cart</Text>
    <FlatList data={filtered} renderItem={finalcartvalue}/>
</View>
<Text style={{fontSize:20}}>Total Cart Value={isSelected}</Text>

<Button title='next'onPress={()=>NavigationTask.navigate("Boxes")} />

    </View>
   
  );
};

export default Newtask;
 