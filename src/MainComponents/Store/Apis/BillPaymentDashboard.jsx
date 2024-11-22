import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../../userData";

export const BillPaymentDashboard = createAsyncThunk(
  "billpaymentdashboard",
  async ({ startDate }, thunkAPI) => {
    try {
      const dateObjs = new Date(startDate);
      const year = dateObjs.getFullYear();
      const month = String(dateObjs.getMonth() + 1).padStart(2, "0");

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}superadmin/dashboard?filter=billpayment&month=${month}&year=${year}`,
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
      if (!data?.status) {
        toast.error(data.message);
      }

      console.log("API Response:", data);
      return data;
    } catch (e) {
      console.error("Error:", e);
      return thunkAPI.rejectWithValue({
        error: e.message || "Failed to establish connection."
      });
    }
  }
);
