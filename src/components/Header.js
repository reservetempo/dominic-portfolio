import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
  return (
    <div>Dom Roomes 
            <Link to={"/about"}>About</Link>
            <Link to={"/works"}>Works</Link>
            <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Header