import React from 'react'
// import ../App.css
const Terminal = () => {
  return (
    <div className="">
    <div className='tv'></div>
    <div class="terminal">
      <div class="toolbar">
        <div class="btn-container">
          <button class="btn btn-color"></button>
          <button class="btn"></button>
          <button class="btn"></button>
        </div>
        <p class="user">ibrahim@admin</p>
      </div>
      <div class="body">
        <div class="terminal_promt">
          <span class="tpuser">ibrahim@admin:</span>
          <span class="tplocation">~</span>
          <span class="tpbling">$</span>
          <span class="tpcursor"></span>
          <div>Outputtttttttttttttttttt</div>
          <hr/>
          <div>Outputtttttttttttttttttt</div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Terminal
