import React, { Component } from "react";
import { View, Button, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

class ZipCodeInput extends Component {
  state = {
    zipCode: ""
  };


  zipCodeChangedHandler = val => {
    this.setState({
      zipCode: val
    });
  };

  zipCodeSubmitHandler = () => {
    this.props.onZipCodeSubmit(this.state.zipCode);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Zip Code (India)"
          value={this.state.zipCode}
          onChangeText={this.zipCodeChangedHandler}
          style={styles.zipInput}
          maxLength={6}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={this.zipCodeSubmitHandler}
        >
          <Text> Search </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  zipInput: {
    width: "60%",
    margin: 10,
    borderColor: 'red',
    borderWidth: 1,
    height: 30,
    borderRadius: 10,
    padding: 5
  },
  searchButton: {
    width: "30%",
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#63c0e8",

  }
});

export default ZipCodeInput;
