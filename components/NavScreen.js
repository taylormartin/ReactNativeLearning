import React from 'react';
import {View, Button} from 'react-native';

export const NavScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Welcome" onPress={() => navigation.navigate('Welcome')} />
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate('Details', {
            messageNote: 'Note about the message',
          })
        }
      />
    </View>
  );
};
