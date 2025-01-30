import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const AccountDetails = createAsyncThunk(
  "accountdetails",
  async ({ id }, thunkAPI) => {
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}tier-upgrade/${id}/review/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userData}`,
            "Content-Type": "application/json",
            "X-Api-Key":
              "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
          }
        }
      );

      const data = await response.json();
      // if (!data?.status) {
      //   toast.error(data.message);
      // }
      return data;
    } catch (e) {
      const status = e.response?.status;
      const data = e.response?.data;

      if (status && status !== 200) {
        toast.error(data?.message || "An error occurred");
      }
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
