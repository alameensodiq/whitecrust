import React, { useEffect, useState } from "react";
import Cover from "../assets/LoginCover.png";
import { ReactComponent as Crust } from "../assets/crustlogo.svg";
import InputLabel from "./Reusables/InputLabel";
import LoginButton from "./Reusables/LoginButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "./Store/Apis/Login";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { loginuser, authenticating } = useSelector((state) => state.login);

  useEffect(() => {
    setLog(false);
  }, []);

  const Authentication = () => {
    const { username, password } = user;
    if (
      (username !== "" || username !== undefined) &&
      (password !== "" || password !== undefined)
    ) {
      dispatch(LoginUser({ username, password }));
      setLog(true);
    } else {
      toast.error("Either Email or Password is empty");
    }
  };

  const Change = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  if (loginuser?.status !== "False" && log) {
    console.log(loginuser?.status);
    console.log(!authenticating);
    window.location.pathname = "/dashboard";
  }

  return (
    <div className="w-full flex flex-row h-[100vh]">
      <div className="hidden lg:flex lg:w-[45%] h-[100vh] bg-cover bg-center">
        <img
          src={Cover}
          alt="cover"
          className="lg:w-full h-[100vh] bg-cover bg-center"
        />
      </div>
      <div className="lg:w-[55%] md:w-[100%] md:items-center sm:w-[100%] sm:items-center flex flex-col  h-[100vh] items-center gap-4 pt-40">
        <Crust />
        <span className="font-inter text-[18px] font-medium leading-[28.8px] tracking-[0.15px] text-left">
          Welcome to whitecrust
        </span>
        <InputLabel
          onChange={(e) => Change(e)}
          name="username"
          value={user?.username}
          placeholder="Enter your username/email address"
          label="Username/Email"
        />
        <InputLabel
          onChange={(e) => Change(e)}
          name="password"
          value={user?.password}
          placeholder="Enter your Password"
          label="Password"
        />
        <LoginButton
          onClick={() => Authentication()}
          name={authenticating ? "Loading..." : "Login"}
        />
        <span className="font-inter text-custom-bg text-[14px]">
          Didn't Forget Password?{" "}
          <span className="text-button-bg font-medium">sign in</span>
        </span>
      </div>
    </div>
  );
};

export default Login;
