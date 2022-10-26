import React from 'react'
import {IoIosAttach} from 'react-icons/io'
import { FcAddImage } from 'react-icons/fc'

const Input = () => {
  return (
    <div className='footer'>
      <input type="text" name="msg" id="msg" placeholder='Type something...'/>
      <div className='icons_container'>
      <IoIosAttach/>
      <FcAddImage/>
      <button>Send</button>
      </div>
    </div>
  )
}

export default Input