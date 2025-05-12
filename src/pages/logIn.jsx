import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUserid } from "../toolkit/UserIdSlice/UserIdSlice";

function LogIn() {
  const Dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const Navigate = useNavigate();
  const LogIn = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        Dispatch(setUserid(user.uid));

        Navigate("/Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };

  const Emailhandle = (event) => {
    setEmail(event.target.value);
  };
  const PasswordHandle = (event) => {
    setpassword(event.target.value);
  };
  return (
    <div>
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

      <button onClick={LogIn}>Iniciar seccion</button>
    </div>
  );
}
export default LogIn;
