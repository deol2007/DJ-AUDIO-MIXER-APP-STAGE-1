import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  displayAlert = () => {
    alert('Play Sound 1');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 50, marginLeft: 50 }}>
        <Button
          color="red"
          title="Sound 1"
          onPress={this.displayAlert}></Button>
      </View>
    );
  }
}

class YellowButton extends Component {
  displayAlert = () => {
    alert('Play Sound 2');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 50, marginLeft: 50 }}>
        <Button color="yellow" title="Sound 2" onPress={this.displayAlert}>
          >
        </Button>
      </View>
    );
  }
}

class GreenButton extends Component {
  displayAlert = () => {
    alert('Play Sound 3');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 50, marginLeft: 50 }}>
        <Button color="green" title="Sound 3" onPress={this.displayAlert}>
          >
        </Button>
      </View>
    );
  }
}

class BlueButton extends Component {
  displayAlert = () => {
    alert('Play Sound 4');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 50, marginLeft: 50 }}>
        <Button color="blue" title="Sound 4" onPress={this.displayAlert}>
          >
        </Button>
      </View>
    );
  }
}

class PurpleButton extends Component {
  displayAlert = () => {
    alert('Play Sound 5');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 50, marginLeft: 50 }}>
        <Button color="purple" title="Sound 5" onPress={this.displayAlert}>
          >
        </Button>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <RedButton></RedButton>
        <YellowButton></YellowButton>
        <GreenButton></GreenButton>
        <BlueButton></BlueButton>
        <PurpleButton></PurpleButton>
      </View>
    );
  }
}
