import React from "react";
import {ReactComponent as Edit} from '../../assets/phoneedit.svg';
import {ReactComponent as Copy} from '../../assets/copy.svg';
import Tables from "../Reusables/Table";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";

const CustomerInfo = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={'Customers'}/>
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Customers
            </span>
          </div>
          <div className="border rounded-custom">
            <div className="flex flex-row items-center gap-2 px-6 py-10">
              <span className="w-[50px] h-[50px] bg-button-bg rounded-circle"></span>
              <span className="text-customer-info text-[15px]">Al-ameen Sodiq</span>
            </div>
            <div className="flex flex-col gap-4 px-6 py-6">
              <hr  className="w-[100%] text-dob"/>
              <span className="text-customer-info pt-4">Account Information</span>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">USER NAME</span>
                    <span className=" text-[10px] px-[10px] py-[10px] text-color-user">Ajoke</span>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">CUSTOMER ID</span>
                    <span className="text-[10px] px-[10px] py-[10px] text-color-user">101242</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">DATE OF BIRTH</span>
                    <span className=" text-[10px] px-[10px] py-[10px] text-color-user">25/12/1981</span>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">BVN</span>
                    <span className="text-[10px] px-[10px] py-[10px] text-color-user">10124294664</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">GENDER</span>
                    <span className=" text-[10px] px-[10px] py-[10px] text-color-user">Female</span>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">DATE JOINED</span>
                    <span className="text-[10px] px-[10px] py-[10px] text-color-user">10/05/2024</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">LIMIT PER TRANSFER</span>
                    <span className=" text-[10px] px-[10px] py-[10px] text-color-user">₦200,000</span>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">DAILY TRANSFER LIMIT</span>
                    <span className="text-[10px] px-[10px] py-[10px] text-color-user">₦100,000</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">ACCOUNT NUMBER</span>
                    <div className="flex flex-row justify-between text-[10px] px-[10px] py-[10px] text-color-user">
                        <span>0040759354</span>
                        <Copy />
                    </div>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">PHONE NUMBER</span>
                    <div className="flex flex-row justify-between text-[10px] px-[10px] py-[10px] text-color-user">
                        <span>07057007046</span>
                        <Edit />
                    </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">TIER</span>
                    <select className="text-[10px] outline-none px-[10px] py-[10px] text-color-user">
                        <option>Tier 1</option>
                    </select>
                </div>
                <div className="flex flex-col border rounded-custom w-[40%] h-[20%]">
                    <span className="bg-info-top border-b-2 text-[10px] px-[10px] py-[10px] text-info-bottom">LOCK STATUS</span>
                    <span className="text-[10px] px-[10px] py-[10px] text-color-user">Unlocked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
