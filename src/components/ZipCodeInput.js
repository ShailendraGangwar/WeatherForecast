import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

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
          <Icon name="search" size={25} color="red" />
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
    alignItems: "center",
    borderBottomColor: "#5f9ea0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#5f9ea0",
    borderTopWidth: StyleSheet.hairlineWidth
  },
  zipInput: {
    width: "80%",
    margin: 10,
    borderColor: "red",
    borderBottomWidth: 1,
    height: 35,
    padding: 5
  },
  searchButton: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#63c0e8",
    shadowColor: "grey", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    position: "relative"
  }
});

export default ZipCodeInput;
