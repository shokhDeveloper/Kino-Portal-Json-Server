import "./Home.css"
import { NavLink } from "react-router-dom"
import { Container } from "../../../Container"

export const Home = () => {
    return(
        <div className="home">
            <Container>
                <h1>KinoPortal ga hush kelibsiz</h1>
                <NavLink to={"/login"}>Dasturga kirish uchun ruyhattan o'ting</NavLink>
                <div className="home_register">
                <NavLink to={"/login"}>Login</NavLink>
                </div>
            </Container>
        </div>
    )
}