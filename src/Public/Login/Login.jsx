import "./Login.css"
import { Container } from "../../Container"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";
export const Login = () => {
    const [type, setType] = useState(!true)
    const {token, setToken, setUser} = useContext(Context)
    const navigator = useNavigate() 
    const handleSub = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const jsons = await axios({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {email: data.get("email"), password: data.get("password")},
            url: "http://localhost:8888/login"
        })
        const response = await jsons.data
        if(response){
            const {accessToken, user} = response
            if(accessToken !== undefined){
                setToken(accessToken)
                setUser(user)   
                navigator("/")
            }
        }
    }
    return(
        <div className="login" style={{display: token !== null? "none": "flex" }}>
            <Container>
                <form onSubmit={handleSub}>
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