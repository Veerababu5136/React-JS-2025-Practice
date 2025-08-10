import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function About() {
  return (
    <div>

      <button><Link to="company">Company</Link></button>
      <h1>i am about</h1>

      <Outlet/>
    </div>
  )
}

export default About
