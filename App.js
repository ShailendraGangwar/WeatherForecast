import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
const { persistor, store } = configureStore();
import AuthScreen from "./src/screens/Auth";
import WeatherByZipCode from "./src/WeatherByZipCode/WeatherByZipCode";
import CurrentWeather from "./src/CurrentWeather/CurrentWeather";

// Register Screens
Navigation.registerComponent("weatherforecast.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "weatherforecast.WeatherByZipCode",
  () => WeatherByZipCode,
  store,
  Provider
);
Navigation.registerComponent("weatherforecast.CurrentWeather", () => CurrentWeather);


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "weatherforecast.AuthScreen",
    title: "Weather Forecast"
  }
});
