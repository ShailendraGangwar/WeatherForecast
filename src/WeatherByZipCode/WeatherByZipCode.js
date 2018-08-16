import React, { Component } from "react";
import { StyleSheet, View, Alert, Animated } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./../store/actions/index";
import ZipCodeInput from "./../components/ZipCodeInput";
import WeatherList from "./../components/WeatherList";
import CurrentCity from "./../components/CurrentCity";
import { BallIndicator } from "react-native-indicators";
import { fetchWeatherData } from "./../util/FetchWeather";
import { capitalizedText } from "./../util/UtilMethods";
import FadeInView from './../components/FadeInView';


export class WeatherByZipCode extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#c3e6f5', // change the background color of the nav bar (remembered across pushes)
    navBarTranslucent: true
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  showAlert = errorMessage => {
    Alert.alert(capitalizedText(errorMessage));
  };
  getWeatherFromApiAsync = async zipCode => {
    if (zipCode === "") {
      return;
    }
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
        <FadeInView style={styles.container}>
          <ZipCodeInput onZipCodeSubmit={this.getWeatherFromApiAsync} />
          <CurrentCity city={this.props.city} />
          <WeatherList weatherData={this.props.weatherData} />
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
  textHeader: {
    marginTop: 30,
    height: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    color: "black"
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
)(WeatherByZipCode);