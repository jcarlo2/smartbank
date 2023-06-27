import React from 'react'
import { Link } from 'react-router-dom'

const ProfileHeader = ()=> {

  return (
    <div className="profile-header-container">
        <div>
          <img src={require('../images/logo-white.png')} alt="SmartBank" />
          <div>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>Dashboard</li>
            </ul>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default ProfileHeader