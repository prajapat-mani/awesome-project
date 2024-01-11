import {View, Text, FlatList, Image, Button, TextInput} from 'react-native';
import React from 'react';
import imag from '../Images/mobile.jpg';
import {addtocart, newinput} from './redux/Action';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from './redux/Constants';
import {useState} from 'react';
import {REMOVE_TO_CART} from './redux/Constants';
import {removetocart} from './redux/Action';
import { API } from './redux/Constants';
import { NEWINPUT } from './redux/Constants';
// import { newinput } from './redux/Action';

export default function Products() {
  interface ofproducts {
    name: string;
    color: string;
    price: number;
    img: string;
    buttonchange: boolean;
  }

  const products: ofproducts[] = [
    {
      color: 'pink',
      name: 'samsung',
      price: 10000,
      img: imag,
      buttonchange: false,
    },
    {
      color: 'orange',
      name: 'nokia',
      price: 20000,
      img: imag,
      buttonchange: false,
    },
    {
      color: 'black',
      name: 'oneplus',
      price: 30000,
      img: imag,
      buttonchange: false,
    },
  ];
  const [buttonstate, setButtonstate] = useState<any[]>(products);

  const dispatch = useDispatch();


const apihandler=(api:any)=>{
  dispatch(api)
}

const newinputhandler=()=>{

  dispatch(newinput(null))

}



  const handleaddtocart = (item: any, index: any) => {
    dispatch(addtocart(item));
    const prodata = buttonstate.map((val, ind) => {
      if (ind === index) {
        return {...val, buttonchange: !val.buttonchange};
      } else {
        return val;
      }
    });

    setButtonstate(prodata);
  };

  const handleremovetocart = (item: any, index: any) => {
    dispatch(removetocart(item.name));

    const prodata = buttonstate.map((val, ind) => {
      if (ind === index) {
        return {...val, buttonchange: !val.buttonchange};
      } else {
        return val;
      }
    });

    setButtonstate(prodata);

    //
  };

  const productitems = (value: any) => {
    return (
      <View
        style={{
          alignItems: 'center',
          borderBottomColor: 'red',
          borderBottomWidth: 2,
          padding: 10,
        }}>
        <Text style={{fontSize: 30}}>Mobile name-{value.item.name}</Text>
        <Text style={{fontSize: 30}}>Mobile Colour-{value.item.color}</Text>
        <Text style={{fontSize: 30}}>Price-{value.item.price}</Text>
        <Image style={{height: 120, width: 50}} source={value.item.img} />

        {value.item.buttonchange === false ? (
          <Button
            title="add to cart"
            onPress={() => handleaddtocart(value.item, value.index)}
          />
        ) : (
          <Button
            title="remove to cart"
            onPress={() => handleremovetocart(value.item, value.index)}
          />
        )}
      </View>
    );
  };

  return (
    <View>
      <Text>Products</Text>
      <FlatList data={buttonstate} renderItem={productitems} />

      <TextInput /><Button title='add'/>
      <Button title='new input' onPress={newinputhandler}/>

      <Button title='apicall' onPress={apihandler}/>
    </View>
  );
}
