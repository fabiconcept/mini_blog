import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({stats}) => {
  return (
  <div className={`mobileNav ${stats ? "open" :"close"}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs post</Link></li>
        <li><Link to="/about">About</Link></li>
    </div>
  )
}

export default MobileNav