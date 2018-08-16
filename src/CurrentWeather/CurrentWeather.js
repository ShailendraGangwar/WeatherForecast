import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ZipCodeInput from "./../components/ZipCodeInput";
import FadeInView from "./../components/FadeInView";
import WeatherItem from "./../components/WeatherItem";
import CurrentCity from "./../components/CurrentCity";
import Icon from "react-native-vector-icons/Octicons";
import DropIcon from "react-native-vector-icons/SimpleLineIcons";
import WindIcon from "react-native-vector-icons/Feather";
class CurrentWeather extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#c3e6f5", // change the background color of the nav bar (remembered across pushes)
    navBarTranslucent: true
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentWeather: null
    };
  }
  getCurrentWeatherFromApiAsync = async zipCode => {
    if (zipCode === "") {
      return;
    }
    this.setState({
      isLoading: true
    });
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},in&appid=88cd59d958273fd178be3b83ca77af9c&units=metric`;
    return fetch(currentWeatherUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          currentWeather: responseJson,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false
        });
      });
  };

  displayJsxMessage() {
    if (this.state.currentWeather !== null) {
      return (
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${
              this.state.currentWeather.weather[0].icon
            }.png`
          }}
        />
      );
    }
  }

  displayJsxCurrentWeatherDetail() {
    if (this.state.currentWeather !== null) {
      return (
        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={styles.weatherDetail}>
            {this.state.currentWeather.weather[0].description}
          </Text>
          <View style={styles.tempContainer}>
            <Icon name="triangle-up" size={30} color="red"/>
            <Text style={styles.weatherDetailTempMinMax}>
              {this.state.currentWeather.main.temp_min.toFixed(1)}
              ˚C
            </Text>
            <Icon name="triangle-down" size={30} color="red" />
            <Text style={styles.weatherDetailTempMinMax}>
              {this.state.currentWeather.main.temp_max.toFixed(1)}
              ˚C
            </Text>
          </View>
        </View>
      );
    }
  }
  displayJsxCity() {
    if (this.state.currentWeather !== null) {
      return <CurrentCity city={this.state.currentWeather.name} />;
    }
  }
  displayJsxHumidityNdWind() {
    if (this.state.currentWeather !== null) {
      return (
        <View style={styles.humidityContainer}>
          <DropIcon name="drop" size={30} color="red" />
          <Text style={styles.weatherDetailTemp}>
            {this.state.currentWeather.main.humidity}%
          </Text>
          <WindIcon name="wind" size={30} color="red" />
          <Text style={styles.weatherDetailTemp}>
            {this.state.currentWeather.wind.speed}
            m/s
          </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FadeInView style={styles.container}>
          <ZipCodeInput onZipCodeSubmit={this.getCurrentWeatherFromApiAsync} />
          {this.displayJsxCity()}
          {this.displayJsxMessage()}
          {this.displayJsxCurrentWeatherDetail()}
          {this.displayJsxHumidityNdWind()}
        </FadeInView>
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
  weatherIcon: {
    width: 120,
    height: 120,
    resizeMode: "cover"
  },
  subContainer: {
    width: "100%",
    // backgroundColor: "#93d2ed",
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
    marginTop: 20,
    // backgroundColor: "#93d2ed",
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
    fontSize: 20,
    textTransform: "capitalize" //iOS
  },
  weatherDetailTempMinMax: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    height: 29,
    margin: 5
  },
  weatherDetailTemp: {
    color: "black",
    fontSize: 18,
    fontFamily: "Arial",
    textAlign: "center",
    margin: 5
    // height: 18
  }
});

export default CurrentWeather;
