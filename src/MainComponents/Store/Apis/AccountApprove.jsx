import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userData } from "../../../userData";

export const AccountApprove = createAsyncThunk(
  "accountapprove",
  async ({ id, status, reject }, thunkAPI) => {
    const accessToken = sessionStorage.getItem("token");
    console.log(status);

    try {
      let requestBody = {
        status
        // requestType: "inbound"
      };

      // Only include rejection_reason if reject is defined
      if (reject) {
        requestBody.rejection_reason = reject;
      }
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}tier-upgrade/${id}/review/`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userData}`,
            "Content-Type": "application/json",
            "X-Api-Key":
              "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
          },
          body: JSON.stringify(requestBody)
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
