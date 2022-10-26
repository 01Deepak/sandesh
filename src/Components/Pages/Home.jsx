import React from 'react'
import Chats from './Chat/Chats'
import Sidebar from './Sidebar/Sidebar'
import './Home.style.scss'

const Home = () => {
  return (
    <div className='home_container'>
      <Sidebar/>
      <Chats/>
    </div>
  )
}

export default Home