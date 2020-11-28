import React from 'react'
import { bubble as Menu } from 'react-burger-menu';
import './Sidebar.css'


function Sidebar() {
    return (
    <div>
        <Menu>
            <a className="menu-item" href="/">
            Home
            </a>
            <a className="menu-item" href="/salads">
            Projects
            </a>
            <a className="menu-item" href="/pizzas">
            About
            </a>
            <a className="menu-item" href="/desserts">
            Get in touch
            </a>
            <a className="menu-item" href="/desserts">
            Contact
            </a>
        </Menu>
    </div>
    )
}

export default Sidebar
