import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import './App.css'

// 方法3：使用自定义的导航守卫
import RouteGuard from './RouteGuard'
import resetScroll from './resetScroll'


function Page1(props) {
  return <div className="page page1">
    <h1>Page1</h1>
  </div>
}

function Page2(props) {
  return <div className="page page2">
    <h1>Page2</h1>
  </div>
}


export default function App() {
  return (
    <RouteGuard onChange={(prevPath, curPath)=>{
        // console.log(prevPath, curPath)
        if(prevPath !== curPath) { // 只有当两个pathname不同时才做处理
          resetScroll();
        }
    }}>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <div className="nav">
        <NavLink to='/page1'>Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>
      </div>
    </RouteGuard>
  )
}
