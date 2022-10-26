import React from 'react'
import profileImg from '../../../Images/ganesh.png'

const ChatHeader = () => {
  return (
    <div className='header_container'>
      <span className='title'>Akash</span>
      <img src={profileImg} alt="img" />
    </div>
  )
}

export default ChatHeader