import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RepMax extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Rep Max Calculator!
        </Text>
        <Text style={styles.instructions}>
          It is very simple and will help your workouts :)
        </Text>
        <Text style={styles.instructions}>
          Entering your rep max in Back Squat, you will{'\n'}
          get the associated rep max in Clean & Jerk,{'\n'}
          Snatch and Deadlift
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RepMax', () => RepMax);
