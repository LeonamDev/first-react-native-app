import React,{useState} from 'react';

import {View, Text, Image } from 'react-native';

import axios from 'axios';


const BtcPrice = () =>{

    const [btcPrice, setBtcPrice] = useState(0);

    setInterval(function(){ 
        axios.get("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT")
        .then(response  => {
            setBtcPrice(response.data.price)
        })    
    }, 1000);

    
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
              style={{width: 30, height: 30}}
              source={{uri: "https://cdn1.iconfinder.com/data/icons/flat-world-currency-1/432/Flat_Currency_Bitcoin-512.png"}}
            />
          <Text>{btcPrice}</Text>
        </View>

    )
}

export default BtcPrice;