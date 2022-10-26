import React from 'react'
import './Sidebar.style.scss'
import profile_img from '../../../Images/ganesh.png'

const SideChats = () => {
  return (
    <div className='sideChats_constainer'>
      <img src={profile_img} alt="img" />
      <div className='sidechats_info'>
      <span className='title'>Akash</span>
      <span className='chat'>hi, How are you.</span>
      </div>
    </div>
  )
}

export default SideChats