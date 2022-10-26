import React from 'react'
import profileImg from '../../../Images/ganesh.png'

const SideNav = () => {
  return (
    <div className='sidenav_container'>
    <span className='sidenav_logo'>Sandesh</span>
    <div className='profile_info'>
      <img src={profileImg} alt="img" />
      <span className='sidenav_profileName'>Deepak</span>
      <button>Logout</button>
    </div>
    </div>
  )
}

export default SideNav