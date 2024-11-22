import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const TransactionDashboards = createAsyncThunk(
  "transactiondashboard",
  async (thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}superadmin/dashboard?filter=transfer_full`,
        // `${process.env.REACT_APP_BASE_URL}superadmin/dashboard`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${accessToken}`,
            Authorization: `Bearer ${userData}`,
            "Content-Type": "application/json",
            "X-Api-Key":
              "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
          }
          //   body: JSON.stringify({
          //     data: {
          //       filter,
          //       month,
          //       year
          //     },
          //     requestType: "inbound"
          //   })
        }
      );
      let data = await response.json();
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);

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
