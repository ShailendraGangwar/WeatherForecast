import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#c3e6f5', // change the background color of the nav bar (remembered across pushes)
    navBarTranslucent: true
  };

  getWeatherForecast = () => {
    startMainTabs();
  };
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.textHeader}>
          Get weather details using zipcode.
        </Text>
        <Text style={styles.textHeader}>
          Please click below to get weather forecast
        </Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={this.getWeatherForecast}
        >
          <Text style={{ fontSize: 18, color: 'red' }}>Go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fd7ef",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textHeader: {
    marginTop: 50,
    width: "80%",
    //fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    color: "black",
    textAlign: "center"
  },
  searchButton: {
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#63c0e8",
    shadowColor: "grey", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    position: "relative"
  }
});
export default AuthScreen;
