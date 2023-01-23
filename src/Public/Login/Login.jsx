import "./Login.css"
import { Container } from "../../Container"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "@mui/base/TabsUnstyled/TabsContext";
export const Login = () => {
    const [type, setType] = useState(!true)
    const {token} = useContext(Context)
    return(
        <div className="login" style={{display: token !== null? "none": "flex" }}>
            <Container>
                <form>
                    <h1>Login</h1>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" />
                    </label>
                    <div style={{textAlign: "start", width: "100%", display: "flex", justifyContent: "center"}}>
                    
                    </div>
                    <label htmlFor="password">
                              
                    <RemoveRedEyeIcon className="password" onClick={() => setType(!type)} />
                        <input   type={type === true? "text": "password"} name="password" id="password" />
                    </label>
                   
                    <label htmlFor="">
                   
                    </label>
                    
                    <label htmlFor="submit">
                    <button type="submit">Yuborish</button>
                    </label>
                    <NavLink className={"register"} to={"/register"}>Ruyhattan o'tish</NavLink>
                </form>
            </Container>
        </div>
    )
}