import React from "react";
import ReactDOM from "react-dom";
import CheckBoxGroup from "./components/CheckBoxGroup/Test";
import RadioBoxGroup from "./components/RadioBoxGroup/Test";
import Select from "./components/Select/Test";

ReactDOM.render(
  <>
    <CheckBoxGroup />
    <RadioBoxGroup />
    <Select/>
  </>,
  document.getElementById("root")
);
