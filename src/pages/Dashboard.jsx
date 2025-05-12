import { useSelector } from "react-redux";
import { getUser } from "../firebase/FirebaseUtils";
import { useDispatch } from "react-redux";
import { setUserData } from "../toolkit/PerfilSlice/PerfilSlice";

import { useNavigate } from "react-router-dom";
function Dashboard() {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const id = useSelector((state) => state.UserId.id);
  const Data = useSelector((state) => state.UserData);
  console.log(Data);
  getUser(id);

  const Cambio = () => {
    Navigate("/Cambio");
  };

  return (
    <div>
      <div>
        <h2>Mi id es: {id}</h2>
        <p>Mi nombre es: {Data.name}</p>
        <p>Mi Email es: {Data.Email}</p>
        <p>Mi Cumpleaños es: {Data.Fecha}</p>
        <p>Descripción personal {Data.DescripciónPersonal}</p>
        <img src={Data.ImagenDePerfil} alt="" />
        <button onClick={Cambio}>Completar</button>
      </div>
    </div>
  );
}
export default Dashboard;
