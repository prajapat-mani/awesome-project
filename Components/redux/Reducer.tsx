import React from 'react';
import {ADD_TO_CART, API} from './Constants';
import {REMOVE_TO_CART} from './Constants';
import { newinput } from './Action';

interface actionPayload {}

const initialstate: any[] = [];

const Reducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_TO_CART:
      const filtereddata = state.filter((item) => {
      
       
        
          return item.name!==action.data
        
       
      })

return [...filtereddata]

case API:
  return action.data


  

    default:
      return state;
  }
};

export default Reducer;
