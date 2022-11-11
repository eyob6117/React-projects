import React from 'react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
    const element1 = <FontAwesomeIcon icon={faBars} />
function Navbar() {
  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <h2>Coding <spna className = "colored">Addict</spna></h2>
                <button className='nav-toggle'>
                    {element1}
                </button>
            </div>

            <div className='links-container show container'>
                    <ul className='links'>
                        <li> <a href = "#">home</a></li>
                        <li> <a href = "#">about</a></li>
                        <li> <a href = "#">contact</a></li>
                        <li> <a href = "#">products</a></li>    
                    </ul>
              </div>
              <div>
                    <ul className='social-icons'>

                    </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar