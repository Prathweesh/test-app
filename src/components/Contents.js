import React from 'react'

export default function Contents() {
  return (
   <>
<div>
      <div className="contents-container">
      <div className="contents-text">
        <h1 className='large'>Discover flex workspace trends & insights</h1>
        <p className='lightblack'>Using data collected from 90+ countries and over 2500 workspaces, get unparalleled insights into flexible working habits across the world.</p>
        <button className='btn' > <a href='./topic'   >Explore topics  ↓ </a> </button>
      </div>
      <img className='contentimage' src="./contentimg.png" alt=" " />
       </div>

<div className="contain">
    <div className="name">
        <p className='topic' id='#topic'>01 Topic</p>
        <h1>Resources and Resource Demand</h1>
        <p className='lightblack'>Discover more about the demand for resources and how they are accessed, both on a global level and market by market.</p>
    </div>

    <div className="cardscontainer">
        
        <div className="card">
            <h2>Global Analysis</h2>
            <p className='lightblack'>A look at the history and trends of coworking and flexible workspaces.</p>
            <button className='btn'>⟶</button>
            <img src='./flexlogo.png' alt=' ' ></img>
        </div>

          <div className="card">
            <h2>Analysis Per Market</h2>
            <p className='lightblack'>A comprehensive analysis of reservation patterns in coworking and  flex workspaces in the US, UK and Spain.</p>
            <button className='btn'>⟶</button>
            <img src='./home-image2.png' alt=' ' ></img>
           </div>
        </div>
   </div>

</div>
  
   
   </>
  )
}
