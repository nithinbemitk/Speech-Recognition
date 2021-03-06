import React from 'react'
import { Button, View,Text } from 'react-native'
import Tts from 'react-native-tts'
 
Tts.setDefaultLanguage('en-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.6);
// Tts.setDefaultPitch(1.5);

// Tts.setDefaultLanguage('en-GB')
// Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')
 
const TextToSpeech = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
 <Button
   title="Speak!"
   onPress={() => Tts.speak('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z')}
 />
 <Button
   title="Stop!"
   onPress={() => Tts.stop()}
 />
 </View>
)
 
export default TextToSpeech