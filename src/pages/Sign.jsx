import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { addUser } from "../firebase/FirebaseUtils";
import { useSelector } from "react-redux";

function Sign() {
  const Data = useSelector((state) => state.UserData);
  console.log(Data);
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Fecha, setFecha] = useState("");

  const Navigate = useNavigate();
  const summit = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);

        addUser({
          uidUser: user.uid,
          name: Nombre,
          Email: Email,
          Fecha: Fecha,
          ImagenDePerfil: Data.ImagenDePerfil,
          DescripciónPersonal: Data.DescripciónPersonal,
          Completo: Data.Completo,
        });

        Navigate("/logIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(error.message);
      });
  };

  const Emailhandle = (event) => {
    setEmail(event.target.value);
  };
  const PasswordHandle = (event) => {
    setpassword(event.target.value);
  };

  const Nombrehandle = (event) => {
    setNombre(event.target.value);
  };
  const Fechahandle = (event) => {
    setFecha(event.target.value);
    console.log(Fecha);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={Email}
          onChange={Emailhandle}
          placeholder="Correo electrónico
"
        />
        <input
          type="text"
          value={Password}
          onChange={PasswordHandle}
          placeholder="Contraseña
"
        />
        <input
          type="text"
          value={Nombre}
          onChange={Nombrehandle}
          placeholder="Nombre de usuario
"
        />

        <input
          type="date"
          value={Fecha}
          onChange={Fechahandle}
          placeholder="Fecha de nacimiento
"
        />
      </form>
      <button onClick={summit}>Registrarse</button>
    </div>
  );
}
export default Sign;
