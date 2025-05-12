import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  DataId: "",
};
export const DataIdSlice = createSlice({
  name: "DataId",
  initialState,
  reducers: {
    setDataid: (state, action) => {
      state.DataId = action.payload;
      console.log(state.id);
    },
  },
});
export const { setDataid } = DataIdSlice.actions;
export default DataIdSlice.reducer;
