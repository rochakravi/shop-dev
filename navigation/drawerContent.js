import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card, Title } from 'react-native-paper';

const DrawerContent = (props, { navigation }) => {

  return (
    <View style={{ backgroundColor : 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{backgroundColor : 'blue'}}><Avatar.Image size={134} source={{ uri: 'http://graph.facebook.com/100028433590719/picture?type=square' }} /></View>
      
      <Card style={{ width: 200, height: 80 }} 
        
       
      >
        <Card.Title title="My Profile"
          
          left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      </Card>
      <Card style={{ width: 200, height: 80 }}>
        <Card.Title title="My Miles"
          left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      </Card>
      <Card style={{ width: 200, height: 80 }}>
        <Card.Title title="My Cards"
          left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      </Card>
      <Card style={{ width: 200, height: 80 }}>
        <Card.Title title="Logout"
          left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      </Card>

      <Text>drawe jkhjkhjkhjkhjkhjkhjkr</Text>

    </View>
  )
}

export default DrawerContent;