import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css'

// 方法1：使用高阶组件
import withScroll from './withScroll'

function Page1() {
  return <div className="page page1">
    <h1>Page1</h1>
  </div>
}

function Page2() {
  return <div className="page page2">
    <h1>Page2</h1>
  </div>
}
const Page1Scroll = withScroll(Page1)
const Page2Scroll = withScroll(Page2)

export default function App() {
  return (
    <Router>
      <Route path='/page1' component={Page1Scroll} />
      <Route path='/page2' component={Page2Scroll} />
      <div className="nav">
        <NavLink to='/page1'>Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>
      </div>
    </Router>
  )
}
