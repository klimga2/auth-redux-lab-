import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../toolkit/PerfilSlice/PerfilSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UpData } from "../firebase/FirebaseUtils";
useState;
function Cambio() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [Nombre, setNombre] = useState("");
  const [Fecha, setFecha] = useState("");

  const [Descripcion, setDescripcion] = useState("");
  const id = useSelector((state) => state.UserId.id);
  const Data = useSelector((state) => state.UserData);
  const Nombrehandle = (event) => {
    setNombre(event.target.value);
  };
  const Fechahandle = (event) => {
    setFecha(event.target.value);
    console.log(Fecha);
  };
  const Descripcionhandle = (event) => {
    setDescripcion(event.target.value);
  };
  const Cambio = () => {
    Dispatch(
      setUserData({
        name: Nombre,
        Fecha: Fecha,
        DescripciónPersonal: Descripcion,
      })
    );
    UpData(id, Data);
    Navigate("/Dashboard");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={Nombre}
        onChange={Nombrehandle}
      />
      <br />
      <input
        type="Date"
        placeholder="Cumpleaños"
        value={Fecha}
        onChange={Fechahandle}
      />
      <br />
      <input
        type="text"
        placeholder="Descripción personal"
        value={Descripcion}
        onChange={Descripcionhandle}
      />
      <br />
      <input type="file" placeholder="Imagen De Perfil" />
      <br />
      <button onClick={Cambio}>Terminar</button>
    </div>
  );
}
export default Cambio;
