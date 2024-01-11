import React from 'react'
import nokiaimg from "./Images/nokia.jpg"
import samsungimg from "./Images/samsung.jpg"
import iphoneimg from "./Images/iphone.jpg"
import realmeimg from "./Images/realme.jpg"

const Appp = () => {
    const data=[{name:"nokia",img:nokiaimg},
{name:"samsung",img:samsungimg},
{name:"iphone" ,img:iphoneimg},
{name:"realme", img:realmeimg}]
  return (
    <div>
      
      {
        data.map((val,ind)=>{
            console.log('====================================');
            console.log(val.name,"jkll");
            console.log('====================================');

        })
      }
    </div>
  )
}

export default Appp
