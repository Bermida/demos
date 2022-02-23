## 多选框组件

需要传递的属性
1. datas：数组，数组的每一项是一个对象，对象有value和text属性
```js
datas = [
    {value: "football", text: "足球"},
    {value: "basketball", text: "篮球"},
    {value: "music", text: "音乐"},
    {value: "movie", text: "电影"},
]
```
2. name：字符串
3. checkedDatas：数组，表示已经选中的项
4. onChange：事件，又上级组件传递，当选中项改变时触发