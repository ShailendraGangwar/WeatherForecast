import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DropIcon from "react-native-vector-icons/SimpleLineIcons";
import WindIcon from "react-native-vector-icons/Feather";

const WeatherItem = props => {
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
          <Text numberOfLines={1} style={styles.weatherDetail}>
            {props.currentWeather}
          </Text>
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
          <DropIcon name="drop" size={13} color="red" />
          <Text style={styles.weatherDetailTemp}>
            {props.currentWeatherHumidity}%
          </Text>
          <WindIcon name="wind" size={13} color="red" />
          <Text style={styles.weatherDetailTemp}>
            {props.currentWeatherWind}m/s
          </Text>
        </View>
      </View>
    </View>
  );
};
export default WeatherItem;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: "powderblue",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "skyblue",
    borderWidth: StyleSheet.hairlineWidth
  },
  subContainer: {
    width: "100%",
    backgroundColor: "#93d2ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  humidityContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  tempContainer: {
    backgroundColor: "#93d2ed",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    width: "95%",
    backgroundColor: "#93d2ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  headerContainer: {
    backgroundColor: "#93d2ed",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  weatherHeader: {
    width: "100%",
    fontWeight: "bold",
    margin: 2,
    textAlign: "center",
    color: "#222b2e"
  },
  weatherDetail: {
    width: "100%",
    color: "red",
    textAlign: "center",
    margin: 2,
    paddingLeft: 5,
    fontSize: 14,
    textTransform: "capitalize" //iOS
  },
  weatherDetailTempMinMax: {
    color: "black",
    textAlign: "center",
    fontSize: 13,
    height: 18,
   
  },
  weatherIcon: {
    width: 60,
    height: 60,
    resizeMode: "cover"
  },
  weatherDetailTemp: {
    color: "black",
    fontSize: 13,
    fontFamily: "Arial",
    textAlign: "center",
    margin: 5,
    height: 18
  }
});
