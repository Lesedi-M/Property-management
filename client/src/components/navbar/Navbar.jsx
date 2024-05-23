import "./navbar.scss"
import { useState } from "react"
function Navbar() {

  const [open, setOpen] =useState(false)


  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img  src="/logo.png"/>
            <span>LamaEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          <a href="/">Login</a>
        <a href="/" className="register">Sign-up</a>
        <div className="menuIcon">
          <img src="/menu.png" onClick={()=>setOpen(!open)}/>
        </div>
        <div className={open ? "menu active"  : "menu"}>
        <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Login</a>
          <a href="/">Sign-up</a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar