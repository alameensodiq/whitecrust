import React from 'react'
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import Tables from '../Reusables/Table';
import Sidebar from '../Reusables/Sidebar';
import Navbar from '../Reusables/Navbar';
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";

const Electricity = () => {
  return (
    <div className='flex flex-row'>
    <div className='w-[15%] h-[100%]'>
     <Sidebar />
    </div>
    <div className='flex flex-col w-[85%] h-[100%]'>
      <div className='w-[100%] h-[20%]'>
       <Navbar title={'Electricity'}/>
      </div>
      <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
         <div className="flex flex-row justify-between">
           <span className="text-route-name text-[28px] font-semibold">
             Electricity
           </span>
           <div className="relative flex flex-row w-[50%]">
              <div className="absolute top-3 left-4" >
                    <Search />
                </div>
             <input
               className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
               placeholder="Search by name,type"
             />
             <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
               Search
             </button>
           </div>
         </div>
         <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
           <div className="flex flex-row justify-end gap-4 px-3">
               <input
                 type='date'
                 className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                 placeholder="Search by name, customerID, account number, transaction reference"
               />
               <input
                 type='date'
                 className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                 placeholder="Search by name, customerID, account number, transaction reference"
               />
               <button className="px-2 flex flex-row gap-1 items-center bg-route-color w-[12%] rounded-custom text-white font-semibold text-[11px]">
                  Download Report <Download />
               </button>
           </div>
           {/* <hr className='' />
           <div className="flex flex-row justify-end px-8 gap-2">
               <Filter />
               <span className='text-route-noncolor text-[12px]'>Filters</span> 
           </div> */}
           <Tables airtime />
         </div>
       </div>
    </div>
  </div>
  )
}

export default Electricity