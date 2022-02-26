import React, { Component } from "react";
import Form from "./index";

export default class Test extends Component {
  render() {
    return (
      <Form onSubmit={(ctx)=>{
          console.log(ctx)
      }}>
        <div>
          账号：<Form.Input name="loginId"/>
        </div>
        <div>
          密码：<Form.Input name="loginPwd" type="password"/>
        </div>
        <div>
          <Form.Button>提交</Form.Button>
        </div>
      </Form>
    );
  }
}
