import { db } from "./config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import { setUserData } from "../toolkit/PerfilSlice/PerfilSlice";
import { setDataid } from "../toolkit/DataId/DataId";
import { useSelector } from "react-redux";
import { data } from "react-router-dom";
export const addUser = async ({
  uidUser,
  name,
  Email,
  Fecha,
  ImagenDePerfil,
  DescripciónPersonal,
  Completo,
}) => {
  const docRef = await addDoc(collection(db, "Usuarios-Lab"), {
    uidUser,
    name,
    Email,
    Fecha,
    ImagenDePerfil,
    DescripciónPersonal,
    Completo,
  });
  console.log("Document written with ID: ", docRef.id);
};

export const UpData = async ({ id, Data }) => {
  //const washingtonRef = doc(db, "Usuarios-Lab", DocId);

  const UserRef = collection(db, "Usuarios-Lab");
  const q = query(UserRef, where("uidUser", "==", id));

  await updateDoc(q, {
    name: Data.name,
    Fecha: Data.Fecha,
    DescripciónPersonal: Data.DescripciónPersonal,
    Completo: Data.Completo,
  });
};

export const getUser = async (id) => {
  const Dispatch = useDispatch();
  const UserRef = collection(db, "Usuarios-Lab");
  const q = query(UserRef, where("uidUser", "==", id));

  const responseDb = await getDocs(q);

  responseDb.forEach((user) => {
    Dispatch(
      setUserData({
        name: user.data().name,
        Email: user.data().Email,
        Fecha: user.data().Fecha,
      })
    );
  });
};
