import React, { useEffect, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../ModalInputtext";
import ModalBoxSelect from "../ModalBoxSelect";
import CreateButton from "../CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { CreateInvestment } from "../../Store/Apis/CreateInvestment";
import { ReactComponent as Success } from "../../../assets/successful.svg";
import { ReactComponent as Approve } from "../../../assets/Approver.svg";
import { ReactComponent as Reject } from "../../../assets/Reject.svg";
import { AccountApprove } from "../../Store/Apis/AccountApprove";
import { useNavigate } from "react-router-dom";

const AppUserModal = ({
  setStep,
  step,
  setReload,
  ids,
  setIds,
  investmentlists = []
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reject, setReject] = useState("");
  const [rejectionreasion, setrejectionreasion] = useState(false);
  const [regbus, setRegbus] = useState({
    name: "",
    amountFrom: "",
    day: "",
    amountTo: "",
    status: "active"
  });

  const [min, setmin] = useState("");
  const [max, setmax] = useState("");
  const [pa, setpa] = useState("");
  const [penalty, setpenalty] = useState("");

  //   {
  //     "name": "string",
  //     "amountFrom": "7246317453",
  //     "amountTo": "5329840537245",
  //     "day90rate": 2147483647,
  //     "day90penalty": 2147483647,
  //     "day180rate": 2147483647,
  //     "day180penalty": 2147483647,
  //     "day270rate": 2147483647,
  //     "day270penalty": 2147483647,
  //     "day365rate": 2147483647,
  //     "day365penalty": 2147483647,
  //     "status": "active"
  //   }

  // const Change = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   const paMapping = {
  //     "90Days": {
  //       Basic: "0.12",
  //       ESSENTIALS: "0.14",
  //       ADVANCED: "0.15",
  //       PREMIUM: "0.16",
  //       EXECUTIVE: "0.17",
  //       PRESTIGE: "0.18",
  //       ELITE: "0.19"
  //     },
  //     "180Days": {
  //       Basic: "0.13",
  //       ESSENTIALS: "0.15",
  //       ADVANCED: "0.16",
  //       PREMIUM: "0.17",
  //       EXECUTIVE: "0.18",
  //       PRESTIGE: "0.19",
  //       ELITE: "0.20"
  //     },
  //     "270Days": {
  //       Basic: "0.14",
  //       ESSENTIALS: "0.16",
  //       ADVANCED: "0.17",
  //       PREMIUM: "0.18",
  //       EXECUTIVE: "0.19",
  //       PRESTIGE: "0.20",
  //       ELITE: "0.21"
  //     },
  //     "365Days": {
  //       Basic: "0.15",
  //       ESSENTIALS: "0.17",
  //       ADVANCED: "0.18",
  //       PREMIUM: "0.19",
  //       EXECUTIVE: "0.20",
  //       PRESTIGE: "0.21",
  //       ELITE: "NEGOTIABLE"
  //     }
  //   };

  //   const minie = {
  //     Basic: "5000",
  //     ESSENTIALS: "1000000",
  //     ADVANCED: "5000000",
  //     PREMIUM: "10000000",
  //     EXECUTIVE: "30000000",
  //     PRESTIGE: "50000000",
  //     ELITE: "100000000"
  //   };
  //   const maxie = {
  //     Basic: "999999",
  //     ESSENTIALS: "4900000",
  //     ADVANCED: "9900000",
  //     PREMIUM: "29900000",
  //     EXECUTIVE: "49900000",
  //     PRESTIGE: "99000000",
  //     ELITE: ""
  //   };
  //   const pa = paMapping[regbus?.day]?.[value] || "";
  //   console.log(pa);
  //   const min = minie?.[value];
  //   const max = maxie?.[value];
  //   if (pa) {
  //     setpa(pa);
  //   }
  //   if (min) {
  //     setmin(min);
  //   }
  //   if (max) {
  //     setmax(max);
  //   }
  //   setRegbus({
  //     ...regbus,
  //     [name]: value
  //   });
  // };

  // const ChangeDuration = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   const paMapping = {
  //     "90Days": {
  //       Basic: "0.12",
  //       ESSENTIALS: "0.14",
  //       ADVANCED: "0.15",
  //       PREMIUM: "0.16",
  //       EXECUTIVE: "0.17",
  //       PRESTIGE: "0.18",
  //       ELITE: "0.19"
  //     },
  //     "180Days": {
  //       Basic: "0.13",
  //       ESSENTIALS: "0.15",
  //       ADVANCED: "0.16",
  //       PREMIUM: "0.17",
  //       EXECUTIVE: "0.18",
  //       PRESTIGE: "0.19",
  //       ELITE: "0.20"
  //     },
  //     "270Days": {
  //       Basic: "0.14",
  //       ESSENTIALS: "0.16",
  //       ADVANCED: "0.17",
  //       PREMIUM: "0.18",
  //       EXECUTIVE: "0.19",
  //       PRESTIGE: "0.20",
  //       ELITE: "0.21"
  //     },
  //     "365Days": {
  //       Basic: "0.15",
  //       ESSENTIALS: "0.17",
  //       ADVANCED: "0.18",
  //       PREMIUM: "0.19",
  //       EXECUTIVE: "0.20",
  //       PRESTIGE: "0.21",
  //       ELITE: "NEGOTIABLE"
  //     }
  //   };
  //   const minie = {
  //     Basic: "5000",
  //     ESSENTIALS: "1000000",
  //     ADVANCED: "5000000",
  //     PREMIUM: "10000000",
  //     EXECUTIVE: "30000000",
  //     PRESTIGE: "50000000",
  //     ELITE: "100000000"
  //   };
  //   const maxie = {
  //     Basic: "999999",
  //     ESSENTIALS: "4900000",
  //     ADVANCED: "9900000",
  //     PREMIUM: "29900000",
  //     EXECUTIVE: "49900000",
  //     PRESTIGE: "99000000",
  //     ELITE: ""
  //   };
  //   const pa = paMapping[value]?.[regbus?.name] || "";
  //   console.log(pa);
  //   const min = minie?.[regbus?.name];
  //   const max = maxie?.[regbus?.name];
  //   if (pa) {
  //     setpa(pa);
  //   }
  //   if (min) {
  //     setmin(min);
  //   }
  //   if (max) {
  //     setmax(max);
  //   }
  //   setRegbus({
  //     ...regbus,
  //     [name]: value
  //   });
  // };

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);

    const selectedInvestment = investmentlists.find(
      (inv) => inv.name === value
    );
    if (!selectedInvestment) return;

    setRegbus((prev) => ({ ...prev, [name]: value }));

    // Update min and max based on investment type
    setmin(selectedInvestment.amountFrom);
    setmax(selectedInvestment.amountTo);

    // If a duration is already selected, update min, max, and pa
    if (regbus.day) {
      setmin(
        selectedInvestment[`day${regbus.day.replace("Days", "")}amountFrom`] ||
          selectedInvestment.amountFrom
      );
      setmax(
        selectedInvestment[`day${regbus.day.replace("Days", "")}amountTo`] ||
          selectedInvestment.amountTo
      );
      setpa(
        selectedInvestment[`day${regbus.day.replace("Days", "")}rate`] || ""
      );
      setpenalty(
        selectedInvestment[`day${regbus.day.replace("Days", "")}rate`] || ""
      );
    }
  };

  const ChangeDuration = (e) => {
    const { name, value } = e.target;
    console.log(value);

    const selectedInvestment = investmentlists.find(
      (inv) => inv.name === regbus.name
    );
    if (!selectedInvestment) return;

    setRegbus((prev) => ({ ...prev, [name]: value }));

    // Update min, max, and pa based on duration
    setmin(
      selectedInvestment[`day${value.replace("Days", "")}amountFrom`] ||
        selectedInvestment.amountFrom
    );
    setmax(
      selectedInvestment[`day${value.replace("Days", "")}amountTo`] ||
        selectedInvestment.amountTo
    );
    setpa(selectedInvestment[`day${value.replace("Days", "")}rate`] || "");
    setpenalty(
      selectedInvestment[`day${value.replace("Days", "")}penalty`] || ""
    );
  };

  const changeType = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus((prev) => ({
      ...prev,
      name: e.target.value
    }));
  };

  console.log(pa);

  const CreateInvestmentPackage = () => {
    const additionalFields = {};
    const parsedPa = parseFloat(pa) || 0; // Ensure pa is a number or fallback to 0

    // Find the selected investment from the investment list
    const selectedInvestment = investmentlists.find(
      (inv) => inv.name === regbus?.name
    );
    if (!selectedInvestment) return;

    // Check the duration (day) selected and set the rate and penalty accordingly
    if (regbus?.day === "90Days") {
      additionalFields.day90rate = parsedPa;
      additionalFields.day90penalty = selectedInvestment.day90penalty || 0.2; // Dynamic penalty
    } else if (regbus?.day === "180Days") {
      additionalFields.day180rate = parsedPa;
      additionalFields.day180penalty = selectedInvestment.day180penalty || 0.2; // Dynamic penalty
    } else if (regbus?.day === "270Days") {
      additionalFields.day270rate = parsedPa;
      additionalFields.day270penalty = selectedInvestment.day270penalty || 0.2; // Dynamic penalty
    } else if (regbus?.day === "365Days") {
      additionalFields.day365rate = parsedPa;
      additionalFields.day365penalty = selectedInvestment.day365penalty || 0.2; // Dynamic penalty
    }

    // Build the final content object for the investment package
    const content = {
      name: regbus?.name,
      amountFrom: min,
      amountTo: max,
      status: regbus?.status,
      ...additionalFields // Spread additional fields dynamically based on day selected
    };

    console.log(content); // Log the content to verify the final structure
    dispatch(CreateInvestment({ content }));
  };

  const CreateInvestments = () => {
    const content = {
      name: regbus?.name
      // amountFrom: min,
      // amountTo: max,
      // status: regbus?.status,
      // ...additionalFields
    };
    console.log(content);
    dispatch(CreateInvestment({ content }));
  };

  const { createinvest, authenticatingcreateinvest } = useSelector(
    (state) => state.createinvest
  );
  console.log(createinvest);

  useEffect(() => {
    if (createinvest?.status === true && !authenticatingcreateinvest) {
      setStep(3);
    }
  }, [createinvest?.status, authenticatingcreateinvest]);

  const { accountapprove, authenticatingaccountapprove } = useSelector(
    (state) => state.accountapprove
  );
  console.log(accountapprove);

  useEffect(() => {
    if (
      accountapprove?.message &&
      !authenticatingaccountapprove &&
      rejectionreasion
    ) {
      setStep(6);
      setReject("");
    }
  }, [accountapprove?.message, accountapprove, rejectionreasion]);

  const handleCloseModal4 = () => {
    setStep(0);
    if (ids) {
      setIds(null);
    }
    setRegbus({
      name: "",
      amountFrom: "",
      day: "90Days",
      amountTo: "",
      status: "active"
    });
    setrejectionreasion(false);
    setmin("");
    setmax("");
    setpa("");
    setReload(true);
  };

  const handleCustomerReload = () => {
    navigate("/customers");
  };
  return (
    <div>
      <AppModal
        step={1}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Create Type"
      >
        <div className="flex flex-row justify-between pl-10 w-[100%] pb-4">
          <ModalInputText
            label="Name of type"
            onChange={(e) => changeType(e)}
            name="name"
            value={regbus?.name}
            placeholder={`${`Enter type name`}`}
          />
          {/* <ModalBoxSelect
            label="Duration"
            onChange={(e) => Change(e)}
            name="firstname"
            value={"firstname"}
            //    earningPartnerId
            options={["90Days", "400Days"]}
          /> */}
          {/* <ModalInputText
            label="First Name"
            onChange={(e) => Change(e)}
            name="firstname"
            value={regbus?.firstname}
            placeholder={`${`Enter Business Rep's First Name`}`}
          /> */}
        </div>
        <div className="flex flex-row justify-center items-center">
          <CreateButton
            name={authenticatingcreateinvest ? "Creating..." : "Create"}
            onClick={() => CreateInvestments()}
          />
        </div>
      </AppModal>
      <AppModal
        step={2}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Create Investment Package"
      >
        <div className="flex flex-row justify-between pl-10 w-[100%] pb-4">
          <ModalBoxSelect
            label="Investment type"
            type
            onChange={(e) => Change(e)}
            name="name"
            value={regbus?.name}
            //    earningPartnerId
            options={investmentlists.map((inv) => inv.name)}
            // options={[
            //   "Basic",
            //   "ESSENTIALS",
            //   "ADVANCED",
            //   "PREMIUM",
            //   "EXECUTIVE",
            //   "PRESTIGE",
            //   "ELITE"
            // ]}
          />
          <ModalBoxSelect
            label="Duration"
            onChange={(e) => ChangeDuration(e)}
            name="day"
            value={regbus?.day}
            //    earningPartnerId
            options={["90Days", "180Days", "270Days", "365Days"]}
          />
          {/* <ModalInputText
            label="First Name"
            onChange={(e) => Change(e)}
            name="firstname"
            value={regbus?.firstname}
            placeholder={`${`Enter Business Rep's First Name`}`}
          /> */}
        </div>
        <div className="flex flex-row justify-between pl-10 w-[100%] pb-4">
          <ModalInputText
            disable
            label="Min Amount"
            onChange={(e) => Change(e)}
            name="min"
            value={
              min
              // regbus?.name === "Basic"
              //   ? "50000"
              //   : regbus?.name === "ESSENTIALS"
              //   ? "1000000"
              //   : regbus?.name === "ADVANCED"
              //   ? "5000000"
              //   : regbus?.name === "PREMIUM"
              //   ? "10000000"
              //   : regbus?.name === "EXECUTIVE"
              //   ? "30000000"
              //   : regbus?.name === "PRESTIGE"
              //   ? "50000000"
              //   : regbus?.name === "ELITE"
              //   ? "100000000"
              //   : ""
            }
            placeholder={`${`NGN 5000`}`}
          />
          <ModalInputText
            disable
            label="Max Amount"
            onChange={(e) => Change(e)}
            name="max"
            value={
              max
              // regbus?.name === "Basic"
              //   ? "999999"
              //   : regbus?.name === "ESSENTIALS"
              //   ? "4900000"
              //   : regbus?.name === "ADVANCED"
              //   ? "9900000"
              //   : regbus?.name === "PREMIUM"
              //   ? "29900000"
              //   : regbus?.name === "EXECUTIVE"
              //   ? "49900000"
              //   : regbus?.name === "PRESTIGE"
              //   ? "99000000"
              //   : regbus?.name === "ELITE"
              //   ? ""
              //   : ""
            }
            placeholder={`${`NGN 5000`}`}
          />
        </div>
        <div className="flex flex-row justify-between pl-10 w-[100%] pb-4">
          <ModalInputText
            disable
            label="Interest (P/A)"
            onChange={(e) => Change(e)}
            name="day"
            value={pa}
            placeholder={`${`NGN 5000`}`}
          />
          <ModalInputText
            disable
            label="Penalty"
            onChange={(e) => Change(e)}
            name="day"
            value={penalty}
            placeholder={`${`NGN 5000`}`}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <CreateButton
            name={authenticatingcreateinvest ? "Creating..." : "Create"}
            onClick={() => CreateInvestmentPackage()}
          />
        </div>
      </AppModal>
      <AppModal
        step={3}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#263BD4"
            }}
          >
            Package Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#263BD4"
            }}
          >
            <span>You have successfully Added a new Investment Package</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <CreateButton name="Close" onClick={() => handleCloseModal4()} />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={4}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Approve />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#263BD4"
            }}
          >
            Approved
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#263BD4"
            }}
          >
            <span>
              You have successfully approved this user’s ID documents{" "}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <CreateButton name="Done" onClick={() => handleCloseModal4()} />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={5}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Rejection reason"
      >
        <div className="flex flex-row justify-between pl-10 w-[100%] pb-4">
          <ModalInputText
            label="Reason for Rejection"
            onChange={(e) => setReject(e.target.value)}
            name="name"
            value={reject}
            placeholder={`${`Reason`}`}
          />
          {/* <ModalBoxSelect
            label="Duration"
            onChange={(e) => Change(e)}
            name="firstname"
            value={"firstname"}
            //    earningPartnerId
            options={["90Days", "400Days"]}
          /> */}
          {/* <ModalInputText
            label="First Name"
            onChange={(e) => Change(e)}
            name="firstname"
            value={regbus?.firstname}
            placeholder={`${`Enter Business Rep's First Name`}`}
          /> */}
        </div>
        <div className="flex flex-row justify-center items-center">
          <CreateButton
            name={authenticatingaccountapprove ? "Rejecting..." : "Done"}
            onClick={() => {
              dispatch(AccountApprove({ id: ids, status: "declined", reject }));
              setrejectionreasion(true);
              console.log(ids);
            }}
          />
        </div>
      </AppModal>
      <AppModal
        step={6}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Reject />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#263BD4"
            }}
          >
            Rejected
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#263BD4"
            }}
          >
            <span>You have successfully rejected this user’s ID documents</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <CreateButton name="Done" onClick={() => handleCloseModal4()} />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={7}
        currentStep={step}
        closeModal={handleCustomerReload}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Approve />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#263BD4"
            }}
          >
            Activated
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#263BD4"
            }}
          >
            <span>You have successfully activated this user’s account</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <CreateButton name="Done" onClick={() => handleCustomerReload()} />
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default AppUserModal;
