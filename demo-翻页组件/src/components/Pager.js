import React from "react";
import "./Pager.css";

/**
 * 属性：
 * 1. current:当前页码
 * 2. totalPage：总页码
 * 3. limitPage：每次最多显示的页码
 * 4. limitData：每页显示多少条数据
 * @param {*} props
 * @returns
 */
export default function Pager(props) {
  //   const min = getMinPage(props);
  //   const max = getMaxPage(getMinPage(props), props);
  const min = getMinToMax(props)[0];
  const max = getMinToMax(props)[1];
  const pages = [];
  for (let i = min; i <= max; i++) {
    pages.push(
      <span
        key={i}
        onClick={() => onPageChange(i, props)}
        className={props.current === i ? "item active" : "item"}
      >
        {i}
      </span>
    );
  }
  return (
    <div className="itemWrap">
      <span
        onClick={() => onPageChange(1, props)}
        className={props.current === 1 ? "item disable" : "item"}
      >
        首页
      </span>
      <span
        onClick={() =>
          onPageChange(props.current === 1 ? 1 : props.current - 1, props)
        }
        className={props.current === 1 ? "item disable" : "item"}
      >
        上一页
      </span>
      {/* 页码 */}
      {pages}
      <span
        onClick={() =>
          onPageChange(
            props.current === getTotalPage(props)
              ? getTotalPage(props)
              : props.current + 1,
            props
          )
        }
        className={
          props.current === getTotalPage(props) ? "item disable" : "item"
        }
      >
        下一页
      </span>
      <span
        onClick={() => onPageChange(getTotalPage(props), props)}
        className={
          props.current === getTotalPage(props) ? "item disable" : "item"
        }
      >
        尾页
      </span>
      <span>{props.current}</span>/<span>{getTotalPage(props)}</span>
    </div>
  );
}

/**
 * 根据当前页码和限制页码，得到显示的最小页码
 */
function getMinPage(props) {
  let min = props.current - Math.floor(props.limitPage / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}

function getMaxPage(min, props) {
  let max = min + props.limitPage - 1;
  if (max > getTotalPage(props)) {
    max = getTotalPage(props);
  }
  return max;
}

function getMinToMax(props) {
  let min, max;
  if(props.limitPage > getTotalPage(props)){
    min = 1;
    max = getTotalPage(props);
  }else if (props.limitPage / 2 > props.current) {
      console.log(111);
    min = 1;
    max = 5;
  } else if (props.limitPage / 2 > getTotalPage(props) - props.current) {
      console.log(222);
    min = getTotalPage(props) - props.limitPage + 1;
    max = getTotalPage(props);
  } else {
      console.log(333);
    min = props.current - 2;
    max = props.current + 2;
  }
  return [min, max];
}

function onPageChange(target, props) {
  if (props.current === target) {
    return;
  }
  props.onClick && props.onClick(target);
}

function getTotalPage(props) {
  return Math.ceil(props.totalData / props.limitData);
}
