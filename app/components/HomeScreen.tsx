import React from 'react';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import axios from 'axios';

import {View, Text, Stylsheet} from 'react-native';

class HomeScreen extends React.Component {
  state = {name: 'Photo Album'};

  render() {
    return (
      <View>
        <StatusBarPaddingIOS />
        <Text>Hello from {this.state.name}</Text>
      </View>
    );
  }
}

export default HomeScreen;
