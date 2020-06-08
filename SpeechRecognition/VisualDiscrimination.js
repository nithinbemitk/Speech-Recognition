import React, { Component } from 'react'
import { Button, View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'



// const onPressCompare = (item) => {

//   console.log("Iteeemmmm ->", item)
// 
// }


export default class VisualDiscrimination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      compareValues: ["SUN", "SNO", "SON", "SUN", "SNO"]
    };
  }
  onPressCompare(clickedItem) {
    console.log(clickedItem);
    var me = new String(this.state.compareValues[0]);
    var you = new String(clickedItem);
    var isEquel = JSON.stringify(me) === JSON.stringify(you);
    console.log(isEquel);
    if (isEquel == true) {
      Alert.alert(
        "Success",
        "Both are same",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Failure",
        "Both are different",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  }

  onNextPressed() {

  }

  onSkipPressed() {

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Visual Discrimination</Text>
        <Text>Mark the one that looks the same as the first one</Text>
        <View style={styles.container}>
          <Text>{this.state.compareValues[0]}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressCompare(this.state.compareValues[1])}
          >
            <Text>{this.state.compareValues[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressCompare(this.state.compareValues[2])}
          >
            <Text>{this.state.compareValues[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressCompare(this.state.compareValues[3])}
          >
            <Text>{this.state.compareValues[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressCompare(this.state.compareValues[4])}
          >
            <Text>{this.state.compareValues[4]}</Text>
          </TouchableOpacity>
          <Image style={styles.logo} source={require('./img/FemaleTeacher.png')} />
        </View>
        <View style={styles.container}>
          <Button
            onPress={this.onSkipPressed}
            title="Next"
            color="#841584"
          />
          <Button
            onPress={this.onSkipPressed}
            title="Skip"
            color="#841584"
          />
        </View>
      </View >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10
  },
  buttonContainer: {
    flex: 1,
  }, 
  logo: {
    width: 66,
    height: 58,
  },
});
