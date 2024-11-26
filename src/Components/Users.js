import { Navigate } from 'react-router'
import { checkToken } from '../API/storage'
import Nav from './Nav'
import React, { useState } from 'react'


const handleUsers = () => console.log("Users req")

const Users = () => {

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
        <div className='users-list'>
          <div className="user-item">
          User1
          </div> 
          <div className="user-item">
          User2
          </div> 
          <div className="user-item">
          User3
          </div> 
          <div className="user-item">
          User4
          </div>
          <div className="user-item">
          User1
          </div> 
          <div className="user-item">
          User2
          </div> 
          <div className="user-item">
          User3
          </div> 
          <div className="user-item">
          User4
          </div>
          <div className="user-item">
          User4
          </div>
          <div className="user-item">
          User1
          </div> 
          <div className="user-item">
          User2
          </div> 
          <div className="user-item">
          User3
          </div> 
          <div className="user-item">
          User4
          </div>
        </div>
      </div>
      </div>
  )
}

export default Users
