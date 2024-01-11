import { View, Text ,FlatList, ScrollView} from 'react-native'
import React from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import Facebook from './Facebook'
import Message from './Message'
import Mcq from './Mcq'
import NavigationTask from './Navigation'
import Dummyfile from './dummyfile'
import FullScreenComponent from './FullScreeen'



export default function App2() {


  return (
    

    <ScrollView>
      <View>

      {/* <Text>shopping Cart</Text> */}
      {/* <Mcq/> */}
      {/* <Dummyfile/> */}
      <FullScreenComponent/>

    {/* <NavigationTask/> */}

      {/* <Header/> */}

     {/* <Products/> */}
     {/* <Facebook/> */}
     {/* <Message/> */}
     </View>
     
    </ScrollView>
     

  )
}