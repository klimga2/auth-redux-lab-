import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
};
export const UserIdSlice = createSlice({
  name: "UserId",
  initialState,
  reducers: {
    setUserid: (state, action) => {
      state.id = action.payload;
      console.log(state.id);
    },
  },
});
export const { setUserid } = UserIdSlice.actions;
export default UserIdSlice.reducer;
