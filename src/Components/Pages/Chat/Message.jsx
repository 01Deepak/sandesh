import React from 'react'
import img from '../../../Images/ganesh.png'

const Message = () => {
  return (
    <div className='sms_container owner'>
    <div></div>
    <div className='sms_content'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod inventore ea tenetur. Nam facilis illum rerum dolorem assumenda voluptas cum nemo neque vitae, libero tempora ipsa amet repudiandae nobis.</p>
    <img src={img} alt="" />
    </div>
    </div>
  )
}

export default Message