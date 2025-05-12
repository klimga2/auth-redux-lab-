import { useState } from "react";
import { Provider } from 'react-redux';
import { store } from "./toolkit/store";
import AppRoutes from "./routes/indexRoutes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
