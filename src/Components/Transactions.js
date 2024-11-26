import { Navigate } from 'react-router'
import { checkToken } from '../API/storage'
import { getTransactions } from '../API/user'
import Nav from './Nav'
import React, { useState } from 'react'


const Transactions = () => {
  
  const [radioOption, setRadioOption] = useState("")
  const [search, setSearch] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  
  if (!checkToken())
    {
        return <Navigate to="/login" />
    }
    
  const handleClick = (clickedValue) => {
    setRadioOption(clickedValue)
  }

  const handleChange = (changedValue) => {
    setSearch(changedValue)
  }

  console.log(radioOption)
  console.log(search)
  console.log(from)
  console.log(to)


    return (
      <div className="main">
      <div class="mobile">
        <Nav />
        <div class="search">
          <input onChange={(e) => handleChange(e.target.value)} type="text" placeholder='search'></input> 
          <button>Search</button>
        </div>
        <div className='filter'>
            <label><input onChange={(e) => handleClick(e.target.value)} type="radio" name="selected" value="" />All</label>
            <label><input onChange={(e) => handleClick(e.target.value)} type="radio" name="selected" value="deposit" />Deposit</label>
            <label><input onChange={(e) => handleClick(e.target.value)} type="radio" name="selected" value="withdraw" />Withdraw</label>
            <label><input onChange={(e) => handleClick(e.target.value)} type="radio" name="selected" value="transfer" />Transfer</label>
            <input onChange={(e) => handleChange(e.target.value)} type="date" name="from" value="" className="from"/>
            <input onChange={(e) => handleChange(e.target.value)} type="date" name="to" value="" className="to"/>
            <div class="transactions-list">
              Output
            </div>
       
        </div>
      </div>
      </div>

  )
}



export default Transactions