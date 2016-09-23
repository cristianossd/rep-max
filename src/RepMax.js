import React, { Component } from 'react';
import Style from './Style';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';

class RepMax extends Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.inputContainer}>
          <TextInput
            style={Style.inputButton}
            keyboardType='numeric'
          />
        </View>

        <View style={Style.displayContainer}>
          <View style={Style.displayItem}>
            <View style={{flex: 5}}>
              <Text>Deadlift:</Text>
            </View>
            <View style={{flex: 5}}>
              <Text>150.0 kg</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('RepMax', () => RepMax);
