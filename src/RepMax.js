import React, { Component } from 'react';
import Style from './Style';

import {
  AppRegistry,
  View,
  Text,
  TextInput
} from 'react-native';

import {
  Toolbar,
  Card,
  Button
} from 'react-native-material-design';

class RepMax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      deadlift: 0,
      clean: 0,
      snatch: 0
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Toolbar title='RepMax' primary='paperCyan' />
        </View>

        <View style={{flex: 2}}>
          <Card>
            <Card.Body>
              <TextInput
                autoFocus={false}
                keyboardType={'numeric'}
                onChangeText={(value) => this.setState({value})}
                placeholder={'Back Squat Rep'}
              />
            </Card.Body>
            <Card.Actions position='right'>
              <Button
                text='CALC'
                onPress={() => {
                  this.setState({deadlift: this.state.value * 1.57});
                  this.setState({clean: this.state.value * 0.8});
                  this.setState({snatch: this.state.value * 0.64});
                }}
              />
            </Card.Actions>
          </Card>
        </View>

        <View style={{flex: 4}}>
          <Card>
            <Card.Body>
              <Text>Deadlift: {this.state.deadlift} kg</Text>
              <Text>Clean & Jerk: {this.state.clean} kg</Text>
              <Text>Snatch: {this.state.snatch} kg</Text>
            </Card.Body>
          </Card>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('RepMax', () => RepMax);
