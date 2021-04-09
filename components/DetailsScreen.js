import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

export const DetailsScreen = ({navigation, route}) => {
  const {messageParam, messageNote} = route.params;
  const [message, setMessage] = useState(messageParam);
  const [textInputVal, setTextInputVal] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{message}</Text>
      <Text>{messageNote}</Text>
      <TextInput
        testID="text-input"
        placeholder="text placeholder"
        onChangeText={setTextInputVal}
        value={textInputVal}
      />
      <Button
        title="Change Message"
        onPress={() => {
          setMessage(textInputVal);
          setTextInputVal('');
        }}
      />
      <Button
        title="Details"
        onPress={() =>
          navigation.setParams({
            messageParam: 'Update message is here',
          })
        }
      />
    </View>
  );
};
