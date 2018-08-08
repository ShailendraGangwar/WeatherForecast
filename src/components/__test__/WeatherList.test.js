import "react-native";
import React from "react";
import WeatherList from "../WeatherList";

import renderer from "react-test-renderer";
import { weatherData } from "../../config/jest/MockData";

it("renders a WeatherList using Snapshots", () => {
  const component = renderer.create(<WeatherList weatherData={weatherData} />);
  expect(component).toMatchSnapshot();
});
