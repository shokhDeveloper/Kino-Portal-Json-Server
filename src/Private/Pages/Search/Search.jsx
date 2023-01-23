import "./Search.css"
import { Container } from "../../../Container"
import { api_key, BASE_IMG_URL, BASE_URL } from "../../../API"
import { useCallback, useContext, useEffect, useState } from "react"
import axios from "axios"
import { Context } from "../../../Context/Context"
import { Card } from "../Card"
import { Paginate } from "../Paginate"

export const Search = () => {
    const {activePage, searchName, searchResult, setSearchResult} = useContext(Context)
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchName}&page=${activePage}`
    const [info, setInfo] = useState(1)
    const getSearch = useCallback(async () => {
        const jsons = await axios({
            method: "GET",
            url: api
        }).catch((error) => {
            console.log(error)
        })
        setInfo(jsons.data.total_pages)
        let response = await jsons.data
        console.log(response.results)
        setSearchResult(response.results)
    },[api])
    useEffect(() => {
        getSearch()
    },[getSearch])
    return(
        <div className="search">
            <Container>
                <h1>
                    Search
                </h1>
                {searchResult?.length?
                    <div className="search_align">
                        {searchResult.map((item) => (
                            <Card id={item.id} name={item.title} date={item.release_date} image={BASE_IMG_URL + "/" +item.poster_path}/>        
                        ))}
                    </div>
                :<h1>Topilmadi</h1>}
            </Container>
            <Container>
                <Paginate totalPage={info}/>
            </Container>
        </div>
    )
}