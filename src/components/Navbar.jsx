import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



function Navbar() {
    
    return <>
    
    <nav className='navbar'>
        <Link to="/all" style={{textDecoration: 'none'}} className='nav-icon'><FontAwesomeIcon icon={faHouse} />  Home</Link>
        <ul className="nav-ul">
            <Link style={{textDecoration: 'none'}} to="/all"><li className="nav-list" >All</li></Link> &nbsp;
            <Link style={{textDecoration: 'none'}} to="/fullstack"><li className="nav-list">Full Stack Developement</li></Link>&nbsp;
            <Link style={{textDecoration: 'none'}} to="/datascience"><li className="nav-list">Data Science</li> </Link> &nbsp;
            <Link style={{textDecoration: 'none'}} to="/cybersecurity"><li className="nav-list">Cyber Security</li></Link> &nbsp;
            <Link style={{textDecoration: 'none'}} to="/career"><li className="nav-list">Career</li></Link> &nbsp;
        </ul>
    </nav>

    </>
}

export default Navbar