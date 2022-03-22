import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css'

// 方法2：使用useEffet
import useScroll from './useScroll'


function Page1(props) {
  useScroll(props.location.pathname)
  return <div className="page page1">
    <h1>Page1</h1>
  </div>
}

function Page2(props) {
  useScroll(props.location.pathname)
  return <div className="page page2">
    <h1>Page2</h1>
  </div>
}


export default function App() {
  return (
    <Router>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <div className="nav">
        <NavLink to='/page1'>Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>
      </div>
    </Router>
  )
}
