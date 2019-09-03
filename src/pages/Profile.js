import React from 'react'
import {Button,View, Image, Text} from 'react-native';



const Profile = ({navigation}) =>{
    
    const user = navigation.getParam('user');
    const handleClick = () => {
        navigation.navigate('Main');
    }

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: user.avatar_url}}
            />
            <Text style={{textAlign: 'center'}}>{user.name}</Text>
            <Text></Text>

            <Button
            onPress={() => handleClick()}
            title="Sair"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
    )
}

export default Profile;