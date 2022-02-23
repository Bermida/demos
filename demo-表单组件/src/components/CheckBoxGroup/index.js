import React from "react";

export default function CheckBoxGroup(props) {
  const checkboxes = getCheckBoxes(props);
  return <div>{checkboxes}</div>;
}

function getCheckBoxes(props) {
  return props.datas.map((item) => (
    <label key={item.value}>
      <input
        type="checkbox"
        name={props.name}
        checked={props.checkedDatas.includes(item.value)}
        value={item.value}
        onChange={(e) => changeHandler(props, e)}
      />
      {item.text}
    </label>
  ));
}

function changeHandler(props, e) {
  let newArr;
  if (e.target.checked) {
    newArr = [...props.checkedDatas, e.target.value];
  } else {
    newArr = props.checkedDatas.filter((it) => it !== e.target.value);
  }
  props.onChange && props.onChange(newArr, props, e);
}
