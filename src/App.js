import "./App.css"
import { Route, Routes } from "react-router";
import { Home as Not } from "./Public/Home";
import { Login } from "./Public/Login";
import { Register } from "./Public/Register";
import { useContext } from "react";
import { Context } from "./Context/Context";
import {Home} from "./Private"
function App() {
  const {token} = useContext(Context)
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={token !== null? <Home/>: <Not/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
