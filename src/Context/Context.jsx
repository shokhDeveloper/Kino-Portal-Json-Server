import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    let parses_token = window.localStorage.getItem("token_kino")
    const [token, setToken] = useState(parses_token !== null? parses_token: null )
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("token_kino", token)
        }
    },[token]) 
    console.log(token)
    let parses_user = window.localStorage.getItem("user_kino")
    const [user, setUser] = useState(parses_user !==null? JSON.parse(parses_user): null)
    useEffect(() => {
        if(user !== null){
            window.localStorage.setItem("user_kino", JSON.stringify(user))   
        }
    },[user])
    const [popular, setPopular] = useState([])
    const [movie, setMovie] = useState([])
    const [actors, setActors] = useState([])
    const [userActor, setUserActor] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [searchName, setSearchName] = useState("man")
    const [searchResult, setSearchResult] = useState([])
    return(
        <Context.Provider value={{actors, setActors, searchName, setSearchName, activePage, setActivePage, movie, setMovie, popular, setPopular, token, setToken, user, setUser, userActor, setUserActor, searchResult, setSearchResult}}>
            {children}
        </Context.Provider>
    )
}