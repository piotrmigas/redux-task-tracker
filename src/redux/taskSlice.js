import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const endpoint = "http://localhost:3001/tasks";

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  try {
    const { data } = await axios(endpoint);
    return data;
  } catch (error) {
    console.log("error", error);
  }
});

export const addTask = createAsyncThunk("addTask", async ({ text, day, reminder }) => {
  try {
    const { data } = await axios.post(
      endpoint,
      { text, day, reminder },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return { data };
  } catch (error) {
    console.log("error", error);
  }
});

export const deleteTask = createAsyncThunk("deleteTask", async (id) => {
  try {
    await axios.delete(`${endpoint}/${id}`);
    return id;
  } catch (error) {
    console.log("error", error);
  }
});

export const toggleReminder = createAsyncThunk("toggleReminder", async (id) => {
  try {
    const { data } = await axios(`${endpoint}/${id}`);
    const updTask = { ...data, reminder: !data.reminder };

    const { data: updData } = await axios.put(`${endpoint}/${id}`, updTask);
    return updData;
  } catch (error) {
    console.log("error", error);
  }
});

export const slice = createSlice({
  name: "task",
  initialState: { tasks: [], showAddTask: false },
  reducers: {
    toggleAddTask: (state) => {
      state.showAddTask = !state.showAddTask;
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [fetchTasks.rejected]: (state) => {
      state.tasks = [];
    },
    [addTask.fulfilled]: (state, action) => {
      state.tasks.push(action.payload.data);
    },
    [addTask.rejected]: (state) => {
      state.tasks = [];
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    [deleteTask.rejected]: (state) => {
      state.tasks = [];
    },
    [toggleReminder.fulfilled]: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, reminder: action.payload.reminder } : task
      );
    },
    [toggleReminder.rejected]: (state) => {
      state.tasks = [];
    },
  },
});

export const { toggleAddTask } = slice.actions;

export default slice.reducer;
