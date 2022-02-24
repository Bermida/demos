import React from "react";
import types from "../../utils/commonTypes";
/**
 * 用来把一个数据包装成一组数据
 * @param {*} Comp 每一个数据的组件
 * @returns 返回一组数据的组件
 */
export default function withDataGroup(Comp) {
  return class DataGroupWrapper extends React.Component {
    static defaultProps = {
      datas: [],
    };
    static propTypes = {
      datas: types.groupDatas,
      name: types.name,
      onChange: types.changeEvent,
      info: types.singleData
    };
    render() {
      const group = this.props.datas.map((item) => (
        <Comp key={item.value} info={item} {...this.props} />
      ));
      return <>{group}</>;
    }
  };
}
