import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import WeatherItem from "./WeatherItem";

const WeatherContainer = props => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.currentWeather}
        renderItem={({ item }) => (
          <WeatherItem
            currentDate={item.dt_txt.slice(11,16)}
            currentWeather={item.weather[0].description}
            currentWeatherMinTemp={item.main.temp_min.toFixed(1)}
            currentWeatherMaxTemp={item.main.temp_max.toFixed(1)}
            currentWeatherIcon={item.weather[0].icon}
            currentWeatherHumidity={item.main.humidity}
            currentWeatherWind={item.wind.speed}
          />
        )}
        keyExtractor={(item, index) => item + index}

      />
    </View>
  );
};
export default WeatherContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "powderblue",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
});
