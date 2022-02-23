import React from "react";

export default function Select(props) {
  const options = getOptions(props);
  return (
    <div>
      <select
        name={props.name}
        onChange={(e) => {
          handlerChange(props, e);
        }}
      >
        {options}
      </select>
    </div>
  );
}

function getOptions(props) {
  return props.datas.map((item) => (
    <option key={item.value} value={item.value}>
      {item.text}
    </option>
  ));
}

function handlerChange(props, e) {
  const newData = e.target.value;
  props.onChange && props.onChange(newData);
}
