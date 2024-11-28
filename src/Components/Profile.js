import { Navigate, useNavigate } from 'react-router'
import { checkToken } from '../API/storage'
import Nav from './Nav'
import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProfile, uploadProfilePic } from '../API/user'
const Profile = () => {

  const navigate = useNavigate()
  
  const [image, setImage] = useState("")
  
  const handleChange = (event) => setImage(event.target.value)
  const handleSubmit = () => image && mutation.mutate(image)

  const {data, isFetching, isSuccess,refetch, isFetched} = useQuery({
    queryKey: ["Profile"],
    queryFn: getProfile,
    enabled: true,
  })

  const mutation = useMutation({
    mutationFn: (image) => uploadProfilePic(image),
    onSuccess: () => {
      console.log("Image uploaded")
        navigate("/Home")
    },
})

  if (!checkToken()) return <Navigate to="/login" />

  return (
    <div className="main">
    <div class="mobile">
      <Nav />
      <div class="profile">
        <div className='image'><img src={data?.image}></img></div>
        <div className="username">{data?.username}</div>
        <div className="balance">{data?.balance}</div>
        <input onChange={handleChange} type='file' accept=".png, .jpg, .jpeg"></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Profile
