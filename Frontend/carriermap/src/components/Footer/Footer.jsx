import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='main-footer'>
       <div className='container'>
           <div className='row'>
                <div className="column">
                    <h3>Address</h3>
                    <ul className='list-unstyled'>
                       <li>Hyderabad</li>
                       <li>PIN-521301</li>
                       <li>Telangana</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Services</h3>
                    <ul className='list-unstyled'>
                       <li>Carrer Path</li>
                       <li> professional Guide</li>
                       <li>Technical Training</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Socaia links</h3>
                    <ul className='list-unstyled'>
                       <li>Facebook</li>
                       <li>Twitter</li>
                       <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className='footlow'>
                 <p>@2022 CarrieMap | All Rights Reserved | Terms Of Service | Privacy</p>    
            </div>
       </div>
    </div> 
  )
}

export default Footer