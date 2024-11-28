import React from 'react'
import '../css/LoadingMobile.css' 

const LoadingMobile = ({name}) => {
  return (
    <div className='main'>
      <div class="loading">   
          <div>Loading {name}</div> 
          <div class="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
    </div>
  )
}

export default LoadingMobile
