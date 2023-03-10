import "./Header.css"
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { Container } from "../../Container"
import { Home as PageHome } from "../Pages"
import { Card } from "../Pages/Card"
import { Movie } from "../Pages/Movie"
import { Actors } from "../Pages/Actors"
import { User } from "../Pages/User"
import { Search } from "../Pages/Search"
import { useContext, useState } from "react"
import { Context } from "../../Context/Context"
import { Home } from "../../Teatr"
import { Home as Rating } from "../../Rating"
import LogoutIcon from '@mui/icons-material/Logout';
export const Header = () => {
    const navigator = useNavigate()
    let [display, setDisplay] = useState(!true)
    const {setSearchName, setToken} = useContext(Context)
    const handleChange = (event) => {
        if(event.target.value.length >= 1){
            navigator("/search")
            setSearchName(event.target.value)
        }else{
            navigator("/")
        }
    }
    return(
        <>
        <header className="header">
            <Container>
                <nav className="nav">
                    <Link to={"/"} className="logo">
                        Kino Portal
                    </Link>
                    <ul className="nav__ul">
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"}  to={"/"}>Ommabop</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"}  to={"teatr"}>Teatrlarda</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive? "text": "nones"}  to={"rating"}>Rating</NavLink>
                        </li>
                    </ul>
                    <input type="text" onChange={handleChange} placeholder="Search" className="header_input" />
                    <div className="drop">
                    <button className="dropdown" onClick={() => setDisplay(!display)}>Sozlamalar</button>
                    <div className="dropdown_menu" style={{display: display === true? "flex": "none"}}>
                        <NavLink onClick={() =>{
                             setDisplay(!display)
                             setToken(null)
                             window.localStorage.clear()
                            

                        }}> <LogoutIcon style={{fontSize: "17px"}}/> Chiqish</NavLink>
                        <NavLink to={"/post"} onClick={() => setDisplay(!display)}>Post</NavLink>
                    </div>
                    </div>
                </nav>
            </Container>
        </header>
        <main>
            <section>
            <Routes>
                <Route index element={<PageHome/>}/> 
                <Route path="/teatr" element={<Home/>}/>
                <Route path="/rating" element={<Rating/>}/>
                <Route path="/movie/:id" element={<Movie/>}/>
                <Route path="/actors/:id" element={<Actors/>}/>
                <Route path="/actor/:id" element={<User/>}/>
                <Route path="/search" element={<Search/>}/>
             </Routes>
            </section>
        </main>  
        </>
    )
}