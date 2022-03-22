import React, { Component } from 'react'
import {BrowserRouter as Router, withRouter} from 'react-router-dom'

// 方法3：使用自定义的导航守卫
let prevLocation, location, action, unblock;

class _GuardHelper extends Component {
    componentDidMount() { 
        // 添加一个阻塞器
        unblock = this.props.history.block((newLocation, ac)=>{
            prevLocation = this.props.location;
            location = newLocation;
            action = ac;
            return '';
        })
        // 添加一个监听器
        this.unListen = this.props.history.listen((location, action)=>{
            if(this.props.onChange) {
                const prevLocation = this.props.location;
                this.props.onChange(prevLocation.pathname, location.pathname, action)
            } 
        })
     }
     componentWillUnmount() {
        this.unListen() // 卸载监听器
        unblock() // 卸载阻塞器
      }
    render() {
        return null;
    }
}

const GuardHelper = withRouter(_GuardHelper)

export default class RouteGuard extends Component {
    handleConfirm = (msg, callback)=>{
        if(this.props.onBeforeChange) {
            this.props.onBeforeChange(prevLocation.pathname, location.pathname, action, callback, unblock)
        } else {
            callback(true)
        }
    }
  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
          <GuardHelper onChange={this.props.onChange}/> {/* 这样就能在全局拿到路由信息 */}
          {this.props.children}
      </Router>
    )
  }
}
