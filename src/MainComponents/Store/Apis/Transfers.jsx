import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Transfer = createAsyncThunk(
  "transfers",
  async ({ searcher, startDate, endDate, currentPage, download }, thunkAPI) => {
    const dateObj = new Date(startDate);
    const formattedDate = dateObj.toISOString().slice(0, 10);
    const dateObjs = new Date(endDate);
    const formattedDated = dateObjs.toISOString().slice(0, 10);

    try {
      // Construct the URL
      const url = new URL(
        `${process.env.REACT_APP_BASE_URL}superadmin/transfer`
      );
      url.searchParams.append("search", searcher);
      url.searchParams.append("start_date", formattedDate);
      url.searchParams.append("end_date", formattedDated);
      url.searchParams.append("page", currentPage);

      // Only append download parameter if it exists and is true
      if (download) {
        url.searchParams.append("download", "true");
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "X-Api-Key":
            "su2UlkakzIsaL1mehEfIRRhIKcfcYywkCsE1Ys435lF3rMQqST1OMzm9TErsuptjuLQn5yJ9QVPtlFKPMaGJw"
        }
      });

      const data = await response.json();
      if (!data?.status) {
        toast.error(data.message);
      }
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
