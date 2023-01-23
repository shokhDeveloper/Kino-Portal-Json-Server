import "./Header.css"
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { Container } from "../../Container"
import { Home as PageHome } from "../Pages"
import { Card } from "../Pages/Card"
import { Movie } from "../Pages/Movie"
import { Actors } from "../Pages/Actors"
import { User } from "../Pages/User"
import { Search } from "../Pages/Search"
import { useContext } from "react"
import { Context } from "../../Context/Context"

export const Header = () => {
    const navigator = useNavigate()
    const {setSearchName} = useContext(Context)
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
                            <NavLink className={(params) => params.isActive? "text": "nones"}  to={"rating"}>Xit kinolar</NavLink>
                        </li>
                    </ul>
                    <input type="text" onChange={handleChange} placeholder="Search" className="header_input" />
                </nav>
            </Container>
        </header>
        <main>
            <section>
            <Routes>
                <Route index element={<PageHome/>}/> 
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