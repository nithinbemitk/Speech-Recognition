import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextToSpeech from './TextToSpeech'
import SpeechToText from './SpeechToText';


import {
    Button,
    View,
    Text,
  } from 'react-native';
  import Spacer from './Spacer';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Home Screen</Text>
        <Spacer></Spacer>
        <Spacer></Spacer>
  
        <Button
          title="Text To Speech"
          onPress={() => navigation.navigate('Text To Speech')}
        />
        <Spacer></Spacer>
  
        <Button
          title="Speech To Text"
          onPress={() => navigation.navigate('Speech To Text')}
        />
      </View>
    );
  }
  
  
  function TextToSpeechScreen({ navigation }) {
    return (
      <TextToSpeech></TextToSpeech>
    );
  }
  
  function SpeechToTextScreen({ navigation }) {
    return (
      <SpeechToText></SpeechToText>
    );
  }

const Home = () => {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Text To Speech" component={TextToSpeechScreen} />
        <Stack.Screen name="Speech To Text" component={SpeechToTextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home

