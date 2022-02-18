import React, { Component } from "react";
import Pager from "./Pager";
import Student from "./Student";

export default class PagerContainer extends Component {
  state = {
    current: 1,
    totalData: 0,
    limitPage: 5,
    limitData: 5,
    students:[],
  };

  constructor(props) {
    super(props);
    this.fetchStudents();
  }

  /**
   *
   * @param {*} current 当前页码
   * @param {*} size 每页显示多少条数据
   * @returns 返回一个对象，cont为总共数据量，findByPage是一个数组，放了所有的数据
   */
  async fetchStudents() {
    const data = await fetch(
      `http://open.duyiedu.com/api/student/findByPage?appkey=zdyzdy_1645110876436&page=${this.state.current}&size=${this.state.limitData}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    this.setState({
      totalData: data.cont,
      students:data.findByPage
    });
  }

  pageChangeHandle = (target) => {
    this.setState({
      current: target,
    }, () => {this.fetchStudents()});
    
  };

  render() {
    return (
      <>
        <ul>
            {this.state.students.map(item=><Student {...item} key={item.id}/>)}
        </ul>
        <Pager
          onClick={this.pageChangeHandle}
          current={this.state.current}
          totalData={this.state.totalData}
          limitPage={this.state.limitPage}
          limitData={this.state.limitData}
        />
      </>
    );
  }
}
