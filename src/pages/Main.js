
import React, {useState} from 'react';
import axios from 'axios';
import {
  TextInput,
  Button,
  View,
} from 'react-native';

const Main = ({navigation}) => {

  const [name, setName] = useState('');


  handleClick = () => {
    axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
      const user = response.data;
      setName('');
      navigation.navigate('Profile', {user: user});
    })

  }
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
            style={{height: 40, textAlign: 'center'}}
            placeholder="Digite o nome do usuário no Github"
            onChangeText={text => setName(text)}
            value={name}
          />

          <Button
            onPress={() => handleClick()}
            title="Buscar"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
       </View>
  
  );
};



export default Main;
