import { configureStore } from "@reduxjs/toolkit";
import UserIdSlice from "./UserIdSlice/UserIdSlice";
import UserData from "./PerfilSlice/PerfilSlice";
import DataIdSlice from "./DataId/DataId";
export const store = configureStore({
  reducer: {
    UserId: UserIdSlice,
    UserData: UserData,
    DataId: DataIdSlice,
  },
});
