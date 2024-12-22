// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global";
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   delete axios.defaults.headers.common.Authorization;
// };

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.token;
//       setAuthHeader(token);
//       const response = await axios.get("/contacts");
//       return response.data;
//     } catch (error) {
//       console.error(
//         "Error in fetchContacts:",
//         error.response?.data || error.message
//       );
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.token;
//       setAuthHeader(token);
//       console.log("Sending contact:", contact);
//       const response = await axios.post("/contacts", {
//         name: contact.name,
//         number: contact.phone, // Зміна з phone на number
//       });
//       console.log("Response:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error(
//         "Error in addContact:",
//         error.response?.data || error.message
//       );
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.token;
//       setAuthHeader(token);
//       const response = await axios.delete(`/contacts/${contactId}`);
//       console.log("Deleted contact ID:", contactId);
//       return response.data;
//     } catch (error) {
//       console.error(
//         "Error in deleteContact:",
//         error.response?.data || error.message
//       );
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const editContact = createAsyncThunk(
//   "contacts/editContact",
//   async ({ id, name, number }, thunkApi) => {
//     try {
//       const response = await axios.patch(`/contacts/${id}`, { name, number });
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const logOut = () => {
//   clearAuthHeader();
// };
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkApi) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkApi) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
