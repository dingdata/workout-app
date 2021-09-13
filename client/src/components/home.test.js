import React from "react";
import renderer from "react-test-renderer";
import { Link, Carousel } from "react-bootstrap";

it.only("Caurosel renders correctly", () => {
  const slider = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(slider).toMatchSnapshot();
});
