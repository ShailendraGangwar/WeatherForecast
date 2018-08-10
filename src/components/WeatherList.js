import React from "react";
import { StyleSheet, SectionList, Text, View } from "react-native";
import WeatherContainer from "./WeatherContainer";

const weatherList = props => {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      sections={props.weatherData}
      renderItem={({ item }) => <WeatherContainer currentWeather={item} />}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.header}>{section.key}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#334045"
  },
  sectionHeader: {
    height: 35,
    flex: 1,
    backgroundColor: "#63c0e8",
    justifyContent: "center",
    shadowColor: "grey", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    position: "relative"
  }
});

export default weatherList;
