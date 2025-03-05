import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const Activate = createAsyncThunk(
  "activate",
  async ({ accountNumber }, thunkAPI) => {
    console.log(accountNumber);
    console.log(process.env.REACT_APP_BASE_URL);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}activate-account/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userData}`,
            "Content-Type": "application/json",
            "X-Api-Key":
              "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
          },
          body: JSON.stringify({
            accountNumber
            // requestType: "inbound"
          })
        }
      );
      let data = await response.json();
      if (data?.status === "True") {
        toast.success(data.message);
      }
      if (data?.status === "False") {
        toast.error(data.message);
      }
      console.log(data);
      // sessionStorage.setItem("token", data?.data?.accessToken);

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
