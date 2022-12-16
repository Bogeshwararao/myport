import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='header'>
       
            <ul className='nav-menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/c ontact">Contact</Link>
                </li>
            </ul>
        
    </div>
  )
}

export default Navbar