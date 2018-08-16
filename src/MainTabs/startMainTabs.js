import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("search", 25),
    MaterialCommunityIcon.getImageSource("weather-cloudy", 25)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "weatherforecast.WeatherByZipCode",
          label: "Weather Forecast",
          title: "Weather Forecast",
          icon: sources[0]
        },
        {
          screen: "weatherforecast.CurrentWeather",
          label: "Current Weather",
          title: "Current Weather",
          icon: sources[1]
        }
      ],
      tabsStyle: {
        tabBarButtonColor: "#5e90a4",
        tabBarSelectedButtonColor: "red",
        tabBarBackgroundColor: "#9fd7ef"
      },
      appStyle: {
        orientation: "portrait",
        bottomTabBadgeTextColor: "red",
        bottomTabBadgeBackgroundColor: "#9fd7ef"
      }
    });
  });
};

export default startTabs;
