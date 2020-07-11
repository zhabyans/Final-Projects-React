import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('teks selamat datang', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/selamat datang/i);
  expect(linkElement).toBeInTheDocument();
});