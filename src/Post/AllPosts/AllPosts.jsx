import { useContext, useEffect, useState } from "react"
import { Container } from "../../Container"
import { Context } from "../../Context/Context"
import "../Post/Post.css"
export const AllPosts = () => {
    let [data, setData]  =useState([])
    useEffect(() => {
      ;(async function(){
        let fetching = await fetch("http://localhost:8888/posts", {
            method: "GET"
        })
        let response = await fetching.json()
        console.log(response)
        setData(response)
      }())
    },[])
    return(
        <div className="allposts_parent">
        <Container>
            <h1>Barcha postlar</h1>
        {data?.length> 0 ?
                <div className="allposts" style={{display: "flex", justifyContent: "space-evenly", flexWrap:"wrap"}}>
                    {data?.map((item) => (
                        <div className="allposts_card" style={{color: "#fff"}}>
                            <h3>{item.title}</h3>
                            <h4>{item.body}</h4>
                            <h4>{item.author}</h4>
                        </div>
                    ))}
                </div>
            :<h1 style={{color: "#fff"}}>Postlar yuq</h1> }
        </Container>
        </div>
    )
}