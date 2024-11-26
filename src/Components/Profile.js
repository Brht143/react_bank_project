import { Navigate } from 'react-router'
import { checkToken } from '../API/storage'
import Nav from './Nav'
import React, { useState } from 'react'


const Profile = () => {

    if (!checkToken())
        {
            return <Navigate to="/login" />
        }

      return (
        <div className="main">
        <div class="mobile">
          <Nav />
          <div class="profile">
            Profile
          </div>
        </div>
        </div>
      )
}

export default Profile
