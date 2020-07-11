import React from "react";
import ReactDOM from "react-dom";
import { Konversi } from "./Konversi";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Konversi />, div);
  ReactDOM.unmountComponentAtNode(div);
});
