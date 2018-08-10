import React, { Component } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./src/store/actions/index";
import ZipCodeInput from "./src/components/ZipCodeInput";
import WeatherList from "./src/components/WeatherList";
import CurrentCity from "./src/components/CurrentCity";
import { BallIndicator } from "react-native-indicators";
import { fetchWeatherData } from "./src/util/FetchWeather";
import { capitalizedText } from "./src/util/UtilMethods";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  showAlert = errorMessage => {
    Alert.alert(capitalizedText(errorMessage));
  };
  getWeatherFromApiAsync = async zipCode => {
    if (zipCode === '') {
      return
    };
    this.setState({
      isLoading: true
    });
    fetchWeatherData(zipCode)
      .then(responseJson => {
        this.setState({
          isLoading: false
        });
        if (responseJson.cod === "200") {
          this.props.fetchWeatherData(responseJson);
        } else {
          this.showAlert(responseJson.message);
        }
      })
      .catch(error => {
        this.showAlert(error);
        console.error(error);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#9fd7ef"
          }}
        >
          <BallIndicator color="black" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Weather Forecast</Text>
        <ZipCodeInput onZipCodeSubmit={this.getWeatherFromApiAsync} />
        <CurrentCity city={this.props.city} />
        <WeatherList weatherData={this.props.weatherData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fd7ef",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textHeader: {
    marginTop: 30,
    height: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    color: 'black'
  }
});

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData,
    city: state.currentCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherData: response => dispatch(fetchData(response))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
