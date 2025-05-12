import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  uidUser: "No completado",
  name: "No completado",
  Email: "No completado",
  Fecha: "No completado",
  ImagenDePerfil: "No completado",
  DescripciónPersonal: "No completado",
  Completo: "No",
};
export const UserData = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.Email = action.payload.Email;
      state.Fecha = action.payload.Fecha;
      state.ImagenDePerfil = action.payload.ImagenDePerfil;
      state.DescripciónPersonal = action.payload.DescripciónPersonal;
      state.Completo = "Si";
    },
  },
});
export const { setUserData } = UserData.actions;
export default UserData.reducer;
