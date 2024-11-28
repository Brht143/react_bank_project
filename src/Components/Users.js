import { Navigate } from 'react-router'
import { checkToken } from '../API/storage'
import Nav from './Nav'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllUsers, transfer } from '../API/user'
import LoadingMobile from './LoadingMobile'
import MyDetails from './MyDetails'

const Users = () => {
  
  const myUser = MyDetails()
  const [amount, setAmount] = useState("")
  const [receiver, setReceiver] = useState("")
  const transferData = { amount : amount, receiver : receiver, username : ""}
  
  const handleSubmit = (receiver) => {
    transferData.username = myUser.data.username
    setReceiver(receiver) 
    mutation.mutate(transferData)
  }

  const {data, isFetching, isSuccess,refetch, isFetched} = useQuery({
    queryKey: ["UsersList"],
    queryFn: getAllUsers,
    enabled: true,
  })

  const mutation =  useMutation({
    mutationKey:["Transfer"],
    mutationFn: (transferData) => transfer(transferData),
  })

  if (isFetching) return <LoadingMobile name={"Users"}/>

  const users = data?.map( user => 
  <div className='user-item'>
        {/* <div class="user-image">{user.image ? <img src={user.image} alt="Not Available"></img>:"NO IMAGE"}</div> */}
        <div class="user-image"></div>
        <div class="user-name">{user.username}</div>
        <div class="user-balance">{user.balance}</div>
        <label>
          <input onChange={(e) => setAmount(e.target.value)} className='amount' type='text'></input>
          <button onClick={() => handleSubmit(user.username, myUser.data.username)}type='submit'>Transfer</button>
        </label>
  </div> )

  if (!checkToken()) return <Navigate to="/login" />

    return (
      <div className="main">
        <div class="mobile">
          <Nav />
          <div className='users-list'>
            {users}
          </div>
        </div>
      </div>
  )
}

export default Users
