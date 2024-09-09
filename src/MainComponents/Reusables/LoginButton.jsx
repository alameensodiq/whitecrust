import React from 'react'

const LoginButton = ({name, onClick}) => {
  return (
    <button onClick={onClick} className='bg-button-bg w-[400px] h-[40px] rounded-custom text-white text-[14px] mt-6'>{name}</button>
  )
}

export default LoginButton