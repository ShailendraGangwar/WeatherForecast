import React from "react";
import { StyleSheet, SectionList, Text, View } from "react-native";
import WeatherContainer from "./WeatherContainer";

const weatherList = props => {
  return (
    <SectionList
      //horizontal={true}
      keyExtractor={(item, index) => item + index}
      sections={props.weatherData}
      renderItem={({ item }) => (
        <WeatherContainer
          currentDate={item.dt_txt.slice(11)}
          currentWeather={item.weather[0].description}
          currentWeatherMinTemp={item.main.temp_min}
          currentWeatherMaxTemp={item.main.temp_max}
          currentWeatherIcon={item.weather[0].icon}
          currentWeatherHumidity={item.main.humidity}
        />
      )}
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
    textAlign: "center"
  },
  sectionHeader: {
    height: 30,
    flex: 1,
    backgroundColor: "#63c0e8",
    justifyContent: "center",
  }
});

export default weatherList;
