import "./App.css"
import { Route, Routes } from "react-router";
import { Home as Not } from "./Public/Home";
import { Login } from "./Public/Login";
import { Register } from "./Public/Register";
import { useContext } from "react";
import { Context } from "./Context/Context";
import {Home} from "./Private"
import { Post } from "./Post";
import { AllPosts } from "./Post/AllPosts";
// import { Posts_user } from "./Private/Post_user";
function App() {
  const {token} = useContext(Context)
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={token !== null? <Home/>: <Not/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {token !== null?
         <>
         <Route path="/post" element={<Post/>}/>
         <Route path="/posts" element={<AllPosts/>}/>
          </>
         :false}
      
      </Routes>
    </div>
  );
}

export default App;
