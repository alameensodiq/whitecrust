import React from 'react'
import Navbar from '../Reusables/Navbar'
import Sidebar from '../Reusables/Sidebar'

const Report = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[15%] h-[100%]'>
     <Sidebar />
    </div>
    <div className='flex flex-col w-[85%] h-[100%]'>
      <div className='w-[100%] h-[20%]'>
       <Navbar />
      </div>
      <div className="w-[100%] py-9 px-5 flex flex-col gap-10">

       </div>
    </div>
  </div>
  )
}

export default Report