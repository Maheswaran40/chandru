import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Mycontext from '../context/Mycontext'
function Header() {
  let {a} = useContext(Mycontext)
  return (
    <div id='header'>
{a}
      <Link style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link>
      <Link style={{textDecoration:"none",color:"black"}} to={"/about"}>About</Link>
      <Link style={{textDecoration:"none",color:"black"}} to={"/contact"}>Contact</Link>
    </div>
    
  )
}

export default Header