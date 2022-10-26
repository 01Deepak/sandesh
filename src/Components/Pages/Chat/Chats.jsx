import React from 'react'
import ChatHeader from './ChatHeader'
import './Chats.style.scss'
import Input from './Input'
import Messages from './Messages'

const Chats = () => {
  return (
    <div className='chats_container'>
      <ChatHeader/>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chats