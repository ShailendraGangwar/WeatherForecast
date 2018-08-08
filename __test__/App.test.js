import "react-native";
import React from "react";
import { App } from "../App";

import renderer from "react-test-renderer";
import { currentCity, weatherData } from "../src/config/jest/MockData";

it("renders a App using Snapshots", () => {
  const component = renderer.create(<App weatherData={weatherData} city= {currentCity} />);
  expect(component).toMatchSnapshot();
});
