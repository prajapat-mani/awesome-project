import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import plus from './Facebookimages/plus.png';
import search from './Facebookimages/search.png';
import messege from './Facebookimages/messege.png';
import home from './Images/home.png';
import friend from './Images/friends.jpg';
import notification from './Images/notification.jpeg';
import market from './Images/market.png';
import video from './Images/facebook.png';
import menu from './Images/14menu.png';
import iphone from './Images/profile.jpeg';
import galary from './Images/galary.png';
import dot from './Images/tripledot.png';

import cross from './Images/cross.png';
import tata from "./Facebookimages/tata.png"

import like from './Images/like.jpg';
import comment from './Images/comment.jpeg';
import share from './Images/share.png';



const style = StyleSheet.create({
  flexx: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Facebook() {
  return (
    <ScrollView>
      <View style={{justifyContent: 'space-between', flexDirection: 'row',alignItems:"center"}}>
        <View>
          <Text style={{color: 'blue', fontSize: 35, fontWeight:"bold"}}>facebook</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={{height: 30, width: 30,marginEnd:15, borderRadius:20}} source={plus} />
          <Image style={{height: 30, width: 30,marginEnd:15}} source={search} />
          <Image style={{height: 30, width: 30,marginEnd:15}} source={messege} />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image style={{height: 40, width: 40}} source={home} />
        <Image style={{height: 40, width: 40}} source={video} />
        <Image style={{height: 40, width: 40}} source={friend} />
        <Image style={{height: 40, width: 40}} source={market} />
        <Image style={{height: 40, width: 40}} source={notification} />
        <Image style={{height: 40, width: 40}} source={menu} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop:10
        }}>
        <Image
          style={{height: 45, width: 45, borderRadius: 25, marginLeft: 20}}
          source={iphone}
        />
        <TextInput
          placeholder="Write Something Here...यहां कुछ लिखें..."
          style={{borderWidth: 1, width: 'auto', borderRadius: 30 }}></TextInput>
        <Image style={{height: 30, width: 30,marginEnd:15}} source={galary} />
      </View>

      <View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>

      <View style={{flexDirection: 'row',}}>
        <ScrollView horizontal={true}>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
        <View
          style={{
            height: 200,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            margin: 10,
          }}></View>
          </ScrollView>
      </View>

      <View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>

      <View style={{justifyContent: 'space-between', flexDirection:"row"}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 45, width: 45, borderRadius: 25, margin: 15}}
            source={iphone}
          />
          <Text style={{marginTop: 15}}>Tata Motors Cars</Text>
        </View>

        <View style={{flexDirection: 'row' ,margin:15}}>
          <Image style={{height: 30, width: 30}} source={dot} />
          <Image style={{height: 30, width: 30}} source={cross} />
        </View>
      </View>
<Text> LUXURY tata Motor Cars </Text>
<Image style={{height:300,width:"100%"}} source={tata}/>
<View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>
<View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
<View style={{flexDirection:"row", alignItems:"center"}}>
<Image style={{height:30,width:30}} source={like}/>
<Text>Like</Text>
</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={comment}/>
<Text>Comment</Text>

</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={share}/>
<Text>Share</Text>
</View>

</View>

<View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>




<View style={{justifyContent: 'space-between', flexDirection:"row"}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 45, width: 45, borderRadius: 25, margin: 15}}
            source={iphone}
          />
          <Text style={{marginTop: 15}}>Tata Motors Cars</Text>
        </View>

        <View style={{flexDirection: 'row' ,margin:15}}>
          <Image style={{height: 30, width: 30}} source={dot} />
          <Image style={{height: 30, width: 30}} source={cross} />
        </View>
      </View>
<Text> LUXURY tata Motor Cars </Text>
<Image style={{height:300,width:"100%"}} source={tata}/>
<View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>
<View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
<View style={{flexDirection:"row", alignItems:"center"}}>
<Image style={{height:30,width:30}} source={like}/>
<Text>Like</Text>
</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={comment}/>
<Text>Comment</Text>

</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={share}/>
<Text>Share</Text>
</View>

</View>

<View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>


<View style={{justifyContent: 'space-between', flexDirection:"row"}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 45, width: 45, borderRadius: 25, margin: 15}}
            source={iphone}
          />
          <Text style={{marginTop: 15}}>Tata Motors Cars</Text>
        </View>

        <View style={{flexDirection: 'row' ,margin:15}}>
          <Image style={{height: 30, width: 30}} source={dot} />
          <Image style={{height: 30, width: 30}} source={cross} />
        </View>
      </View>
<Text> LUXURY tata Motor Cars </Text>
<Image style={{height:300,width:"100%"}} source={tata}/>
<View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>
<View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
<View style={{flexDirection:"row", alignItems:"center"}}>
<Image style={{height:30,width:30}} source={like}/>
<Text>Like</Text>
</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={comment}/>
<Text>Comment</Text>

</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={share}/>
<Text>Share</Text>
</View>

</View>
<View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>



<View style={{justifyContent: 'space-between', flexDirection:"row"}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 45, width: 45, borderRadius: 25, margin: 15}}
            source={iphone}
          />
          <Text style={{marginTop: 15}}>Tata Motors Cars</Text>
        </View>

        <View style={{flexDirection: 'row' ,margin:15}}>
          <Image style={{height: 30, width: 30}} source={dot} />
          <Image style={{height: 30, width: 30}} source={cross} />
        </View>
      </View>
<Text> LUXURY tata Motor Cars </Text>
<Image style={{height:300,width:"100%"}} source={tata}/>
<View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>
<View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
<View style={{flexDirection:"row", alignItems:"center"}}>
<Image style={{height:30,width:30}} source={like}/>
<Text>Like</Text>
</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={comment}/>
<Text>Comment</Text>

</View>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={share}/>
<Text>Share</Text>
</View>

</View>
<View
        style={{
          borderBottomWidth: 10,
          borderBottomColor: 'grey',
          marginTop: 8,
        }}></View>

    </ScrollView>
  );
}
