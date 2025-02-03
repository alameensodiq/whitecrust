import React, { useEffect, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Reusables/Loader";
import { AccountDetails } from "../Store/Apis/AccountDetails";
import { ReactComponent as Back } from "../../assets/Back.svg";
import { ReactComponent as Action } from "../../assets/action.svg";
import { ReactComponent as Doc } from "../../assets/Doc.svg";
import { ReactComponent as Approve } from "../../assets/Approver.svg";
import { ReactComponent as Reject } from "../../assets/Reject.svg";
import { useNavigate } from "react-router-dom";
import AppUserModal from "../Reusables/Modal/AppUserModal";
import { AccountApprove } from "../Store/Apis/AccountApprove";

const AccountDetail = () => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [ids, setIds] = useState(null);
  const [reload, setReload] = useState(false);
  const [approval, setApproval] = useState(false);
  let id = window?.location?.pathname.split("/")[2];
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AccountDetails({ id }));
    setIds(id);
    if (reload) {
      dispatch(AccountDetails({ id }));
      setStep(0);
      setReload(false);
      setApproval(false);
    }
  }, [id, reload]);

  const { accountapprove, authenticatingaccountapprove } = useSelector(
    (state) => state.accountapprove
  );
  console.log(accountapprove);

  const { accountdetails, authenticatingaccountdetails } = useSelector(
    (state) => state?.accountdetails
  );
  console.log(accountdetails);

  useEffect(() => {
    if (accountapprove?.status && !authenticatingaccountapprove && approval) {
      setStep(4);
    }
  }, [accountapprove?.status, authenticatingaccountapprove, approval]);

  const White = () => {
    setWhitecrust(true);
    setOther(false);
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <AppUserModal
        ids={ids}
        setIds={setIds}
        setStep={setStep}
        step={step}
        setReload={setReload}
      />
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={" Account"} />
        </div>
        {authenticatingaccountdetails ? (
          <Loader />
        ) : (
          <div className="w-[100%] py-9 px-5 flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row md:flex-row justify-start">
              <span
                className="text-[14px] lg:text-[16px]"
                style={{ color: "#667085" }}
              >
                Account upgrade /
              </span>
              <span
                className="text-[14px] lg:text-[16px]"
                style={{ color: "#101828" }}
              >
                {accountdetails?.user?.userprofile?.otherName}
              </span>
            </div>
            <div>
              <Back
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/account")}
              />
            </div>
            <div className="flex flex-row  justify-start gap-1 relative">
              <span
                className="text-[14px] lg:text-[16px]"
                style={{ color: "#101828" }}
              >
                {accountdetails?.user?.userprofile?.otherName}
              </span>
              <Action
                style={{ cursor: "pointer" }}
                onClick={() => setShow(!show)}
              />
              {show && (
                <div className="bg-white rounded-[8px] absolute flex flex-col justify-between w-[130px] h-[80px] p-3 border-[1px] left-[35%]">
                  <div
                    className="flex flex-row items-center gap-1 cursor-pointer"
                    onClick={() => {
                      dispatch(AccountApprove({ id, status: "approved" }));
                      setApproval(true);
                    }}
                  >
                    <Approve />
                    <span className="text-[#263BD4] text-[12px]">Approve</span>
                  </div>
                  <div
                    className="flex flex-row items-center gap-1"
                    onClick={() => setStep(5)}
                  >
                    <Reject />
                    <span className="text-[#263BD4] text-[12px]">Reject</span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "20px",
                  background: "#ECFDF3",
                  color: "#027A48",
                  gap: "6px",
                  borderRadius: "6px",
                  fontSize: "10px"
                }}
              >
                <span
                  style={{
                    background: "#027A48",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%"
                  }}
                ></span>{" "}
                Action
              </button>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col w-[100%]">
                <div className="flex flex-row gap-4 text-[14px] items-center text-route-noncolor font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Details
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    ID Uploads
                  </span>
                </div>
                <div className="gap-4 border-b-[#EAECF0] border-b-[1px]">
                  {whitecrust && (
                    <div className="w-[50px] h-[2px] bg-route-color" />
                  )}
                  {other && (
                    <div className="w-[80px] h-[2px] bg-route-color lg:ml-[5%] md:ml-[8%] ml-[30%]" />
                  )}
                </div>
              </div>
            </div>
            {whitecrust ? (
              <>
                <div className="gap-4 border-b-[#EAECF0] border-b-[1px]">
                  <span className="text-[#101828] text-[13px] lg:text-[16px] md:text-[16px]">
                    Customer details
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-8 items-center justify-between  w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      Full name
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.user?.userprofile?.otherName}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      Phone number
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.user?.userprofile?.phoneNumber}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      Email address
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.user?.email}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between  w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      Account number
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.user?.useraccounts[0]?.accountNo}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      DOB
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.user?.userprofile?.dob}
                    </span>
                  </div>
                  <div className="flex flex-row gap-8 items-center justify-between w-[80%] lg:w-[40%] md:[40%]">
                    <span className="text-[#475467] text-[12px] lg:text-[14px] md:text-[14px]">
                      Status
                    </span>
                    <span className="text-[#101828] text-[12px] lg:text-[14px] md:text-[14px] w-[50%]">
                      {accountdetails?.status}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2 lg:flex-row md:flex-row justify-between items-start w-[100%] lg:w-[60%] md:w-[60%]">
                  <div className="flex flex-col">
                    <span className="text-[#344054] text-[12px] lg:text-[14px] md:text-[14px]">
                      Photo ID (Front page)
                    </span>
                    <span className="text-[#667085] text-[12px] lg:text-[14px] md:text-[14px]">
                      This is the front page of the ID uploaded
                    </span>
                  </div>
                  <img
                    alt="docs"
                    className="w-[50%] lg:w-[30%] md:w-[30%] h-[70px] rounded-[8px]"
                    src={`${
                      process.env.REACT_APP_BASE_URL
                    }${accountdetails.validId.replace(/^\/+/, "")}`}
                  />
                  <Doc
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        `${
                          process.env.REACT_APP_BASE_URL
                        }${accountdetails.validId.replace(/^\/+/, "")}`,
                        "_blank"
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 lg:flex-row md:flex-row justify-between items-start w-[100%] lg:w-[60%] md:w-[60%]">
                  <div className="flex flex-col">
                    <span className="text-[#344054] text-[12px] lg:text-[14px] md:text-[14px]">
                      Photo ID (Front page)
                    </span>
                    <span className="text-[#667085] text-[12px] lg:text-[14px] md:text-[14px]">
                      This is the front page of the ID uploaded
                    </span>
                  </div>
                  <img
                    alt="docs"
                    className="w-[50%] lg:w-[30%] md:w-[30%] h-[70px] rounded-[8px]"
                    src={`${
                      process.env.REACT_APP_BASE_URL
                    }${accountdetails.utility.replace(/^\/+/, "")}`}
                  />
                  <Doc
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        `${
                          process.env.REACT_APP_BASE_URL
                        }${accountdetails.validId.replace(/^\/+/, "")}`,
                        "_blank"
                      )
                    }
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDetail;
