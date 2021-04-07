import React from 'react';
import {Text, View, Button} from 'react-native';

export const DetailsScreen = ({navigation, route}) => {
  const {message, messageNote} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{message}</Text>
      <Text>{messageNote}</Text>
      <Button
        title="Details"
        onPress={() =>
          navigation.setParams({
            message: 'Update message is here',
          })
        }
      />
    </View>
  );
};
