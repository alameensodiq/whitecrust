import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const Investment = createAsyncThunk(
  "investment",
  async ({ startDate, endDate, currentPage, search, download }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    const dateObj = new Date(startDate);
    const formattedDate = dateObj.toISOString().slice(0, 10);

    const dateObjs = new Date(endDate);
    const formattedDated = dateObjs.toISOString().slice(0, 10);

    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    // Construct the base URL
    const baseUrl = `${process.env.REACT_APP_BASE_URL}superadmin/investment?start_date=${formattedDate}&end_date=${formattedDated}&page=${currentPage}&search=${search}`;

    // Append download parameter only if it's true
    const url = download ? `${baseUrl}&download=true` : baseUrl;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userData}`,
          "Content-Type": "application/json",
          "X-Api-Key":
            "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
        }
      });

      let data = await response.json();
      toast.success(data.message);
      console.log(data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
