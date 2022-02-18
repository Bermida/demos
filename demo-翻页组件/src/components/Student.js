import React from "react";

export default function Student(props) {
  return <li>
      【编号】{props.sNo}
      【姓名】{props.name}
      【性别】{props.sex}
      【Email】{props.email}
      【出生年份】{props.birth}
  </li>;
}

