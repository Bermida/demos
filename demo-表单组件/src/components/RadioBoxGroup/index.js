import React from "react";

export default function RadioBoxGroup(props) {
  const radioboxes = getRadioBoxes(props);
  return <div>{radioboxes}</div>;
}

function getRadioBoxes(props) {
  return props.datas.map((item) => (
    <label key={item.value}>
      <input
        type="radio"
        name={props.name}
        value={item.value}
        checked={props.checkedData === item.value}
        onChange={(e) => {
          handlerChange(props, e);
        }}
      />
      {item.text}
    </label>
  ));
}

function handlerChange(props, e) {
  const newData = e.target.value;
  props.onChange && props.onChange(newData, props, e);
}
