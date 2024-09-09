import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const LoginUser = createAsyncThunk(
  "login",
  async ({ username, password }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}superadmin/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key":
              "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
          },
          body: JSON.stringify({
            data: {
              username,
              password
            },
            requestType: "inbound"
          })
        }
      );
      let data = await response.json();
      toast.success(data.message);
      console.log(data);
      sessionStorage.setItem("token", data?.data?.accessToken);

      // Decode the token using jwt-decode
      //   const token = data?.data?.token;
      //   const decodedToken = jwtDecode(token);
      //   sessionStorage.setItem("role", decodedToken?.role);
      //   console.log(decodedToken);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
    }
  }
);
