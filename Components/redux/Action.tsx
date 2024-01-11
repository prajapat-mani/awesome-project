import { ADD_TO_CART } from "./Constants";
import { REMOVE_TO_CART } from "./Constants";
import { API } from "./Constants";
import { NEWINPUT } from "./Constants";

export  function addtocart(item:any){
   
    return {
        type:ADD_TO_CART,
        data:item
    }
}

    export function removetocart(item:any){
   
        return {
            type:REMOVE_TO_CART,
            data:item
        }

}
export const api=async(dispatch)=>{
    const apidata=await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(apidata,"kl");

    return {
        type:API,
        data:apidata
    }
    
}
export  function newinput(item:any){
   
    return {
        type:NEWINPUT,
        data:item
    }
}
