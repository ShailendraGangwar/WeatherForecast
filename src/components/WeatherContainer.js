import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const WeatherContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.weatherHeader}>{props.currentDate}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${
              props.currentWeatherIcon
            }.png`
          }}
        />
        <View style={styles.subContainer}>
          <Text style={styles.weatherDetail}>{props.currentWeather}</Text>
          {/* <Text style={styles.weatherDetailTemp}>
            {props.currentWeatherTemp}˚C
          </Text> */}
          <View style={styles.tempContainer}>
            <Icon name="arrow-drop-down" size={30} color="red" />
            <Text style={styles.weatherDetailTempMinMax}>
              {props.currentWeatherMinTemp}˚C
            </Text>
            <Icon name="arrow-drop-up" size={30} color="red" />
            <Text style={styles.weatherDetailTempMinMax}>
              {props.currentWeatherMaxTemp}˚C
            </Text>
          </View>
        </View>
        <View style={styles.humidityContainer}>
          <Text style={styles.weatherDetailTempMinMax}>Humidity</Text>
          <Text style={styles.weatherDetailTemp}>
            {props.currentWeatherHumidity}%
          </Text>
        </View>
      </View>
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
    alignItems: "center"
  },
  subContainer: {
    width: "50%",
    backgroundColor: "#93d2ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  humidityContainer: {
    //width: "50%",
    backgroundColor: "#93d2ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  tempContainer: {
    width: "70%",
    backgroundColor: "#93d2ed",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  innerContainer: {
    width: "100%",
    backgroundColor: "#93d2ed",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  headerContainer: {
    backgroundColor: "#abdcf1",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  weatherHeader: {
    width: "100%",
    fontWeight: "bold",
    margin: 2,
    textAlign: "left",
    paddingLeft: 5
  },
  weatherDetail: {
    // width: '50%',
    color: "red",
    textAlign: "center",
    margin: 2,
    paddingLeft: 5,
    fontSize: 16
  },
  weatherDetailTempMinMax: {
    color: "black",
    textAlign: "center",
    fontSize: 13,
    height: 18
  },
  weatherIcon: {
    width: 60,
    height: 60,
    resizeMode: "cover"
  },
  weatherDetailTemp: {
    color: "red",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right"
  }
});
