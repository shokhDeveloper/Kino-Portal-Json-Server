import "./Header.css"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import { Container } from "../../Container"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Login } from "../Login"

export const Header = () => {
    return(
        <>
        <header>
            <Container>
                <nav className="nav">
                    <Link to={"/"} className="logo">Kino Portal</Link>
                    <ul className="nav__ul">
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"} to={"/"}>Bosh sahifa</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"} to={"about"}>Project haqida</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"} to={"login"}>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
        <main>
            <section>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            </section>
        </main>
        
        </>
    )
}