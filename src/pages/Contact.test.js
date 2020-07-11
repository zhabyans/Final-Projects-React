import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Contact";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('teks hubungi kami', () => {
  const { getByText } = render(<Contact />);
  const linkElement = getByText(/hubungi kami/i);
  expect(linkElement).toBeInTheDocument();
});