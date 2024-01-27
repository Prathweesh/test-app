import React from 'react'

export default function Navbar() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
       
        <a className="navbar-brand" href="#" style={{ display: 'flex', alignItems: 'center' }} >
        <img src="./logofllexspace.png" alt=" "  />
        <div style={{ display: 'block'}} >
        <h2 className='ml-8' >FLEXSPACE </h2> <h2 className='mr-8'> OBSERVATORY &nbsp; </h2> 
        </div>
        <div className='vline'> </div> 
        <h6 className='ml-2 mb-0'>&nbsp; Powered by NEXUDUS </h6>  
         
        </a>       
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
          <li className="nav-item mr-3">
              <a className="nav-link text-orange" href="#"> Insights </a>
            </li>
    
            <li className="nav-item mr-3">
              <a className="nav-link text-orange" href="#">Contact us </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link text-orange" href="#">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    
      
       
       
   
    
  )
}
