import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const Investment = createAsyncThunk(
  "investment",
  async ({ startDate, endDate, currentPage, search }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const dateObj = new Date(startDate);

    const formattedDate = dateObj.toISOString().slice(0, 10);

    const dateObjs = new Date(endDate);

    const formattedDated = dateObjs.toISOString().slice(0, 10);
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}superadmin/investment?start_date=${formattedDate}&end_date=${formattedDated}&page=${currentPage}&search=${search}`,
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
      toast.success(data.message);
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
