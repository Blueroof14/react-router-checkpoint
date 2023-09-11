import React from 'react'

const Header = () => {
  return (
    <div className= 'Logo'>
       <h1>GoMyCode</h1> 
       <div>
        <nav>
            <ul>
                <li>
                    <a href="/about">About page</a>
                </li>
                <li>
                    <a href="/contact">Contacts</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
            </ul>
        </nav>
       </div>
       


    </div>
   
  )
}

export default Header