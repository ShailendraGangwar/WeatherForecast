import React from "react";
import {  StyleSheet, Text } from "react-native";

const CurrentCity = props => {
    return (
        <Text style={styles.city}> {props.city} </Text>
    );
};

const styles = StyleSheet.create({
  city: {
    margin: 5,
    height: 30,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    color: 'red',
    fontSize: 18
  },
});

export default CurrentCity;
