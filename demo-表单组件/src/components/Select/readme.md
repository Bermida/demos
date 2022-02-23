## 下拉框组件

需要传递的属性
1. datas：数组，数组的每一项是一个对象，对象有value和text属性
```js
datas: [
    {value: "cate1", text: "类别1"},
    {value: "cate2", text: "类别2"},
    {value: "cate3", text: "类别3"},
    {value: "cate4", text: "类别4"},
]
```
2. name：字符串
3. checkedData：字符串，当前选中的项的value值
4. onChange：事件，又上级组件传递，当选中项改变时触发