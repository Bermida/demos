import PropTypes from "prop-types";

// 一些公用的属性类型约束

const types = {
  children: PropTypes.node, // 子节点必须是可以渲染的节点
  groupDatas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ), // 多选框、单选框、下拉框 的datas的数据格式
  chooseDatas: PropTypes.arrayOf(PropTypes.string), // 多选框已选中
  checkedData: PropTypes.string, // 单选框、下拉框已选中
  singleData: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }), // datas里面的单条数据格式
  name: PropTypes.string,
  changeEvent: PropTypes.func // 改变事件
};

export default types;
