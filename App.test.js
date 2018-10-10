import React from "react";
import App from "./App";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import renderer from "react-test-renderer";

Amplify.configure(config);

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
