import "./Post.css"
import { Container } from "../../Container"
import { useContext, useCallback, useEffect, useState, useRef } from "react"
import { Context } from "../../Context/Context"
import { Modal } from "../Modal"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import { Myposts } from "../Mypost"

export const Post = () => {
    let [modal, setModal] = useState(!true)
    let {user, setPosts} = useContext(Context)
    let [data, setData] = useState([])
    const navigator = useNavigate()
    let date = new Date()
    let locals = date.toLocaleDateString()
    let hours = date.getHours().toString().padStart(2, "0")
    let minuts = date.getMinutes().toString().padStart(2, "0")
    const joyida = () => {
        fetch(`http://localhost:8888/posts?user_id=${user.id}`).then((response) => response.json())
        .then((data) => setData(data))
    }
    useEffect(() => {
        joyida()
    },[user.id])
    let handleSub = async (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        const jsons = await axios({
            method: "POST",
            url: "http://localhost:8888/posts",
            headers: {
                "Content-type": "application/json"
            },
            data: {
                title: data.get("title"),
                body: data.get("body"),
                date: locals + "-"+hours+":"+minuts +" "+ "Create-At",
                user_id: user.id,
                author: user.firstname + " " + user.lastname
            }
        }).catch((error) => console.log(error))
        if(jsons.status === 201){
            setModal(!modal)
        }
        let response = await jsons.data
        joyida()
    }   
    useEffect(() => {
        window.addEventListener("keyup", (event) => {
            if(event.keyCode === 27){
                navigator(-1)
            }
        })
    },[])
    return(
        <div className="post">
            <div className="post__title">
                <h2>Post yozing</h2>
            </div>
            <button onClick={() => setModal(!modal)} className="post__btn">
                Post qushish + 
            </button>
            <NavLink to={"/posts"} style={{display: "block", padding: "1rem 0rem", color: "crimson" }}>
                Barcha postlar
            </NavLink>
            <h3 style={{textAlign: "center", fontSize: "40px"}}>Sizga tegishli postlar</h3>
            {data?.length> 0?
                <ul>
                    {data?.map((item) => (
                        <Myposts joyida={joyida} key={item.id} title={item.title} id={item.id}/>
                    ))}
                </ul>
            :<h1>Sizning postlaringiz yuq</h1>}
            <Modal modal={modal} setModal={setModal} title="Post qushish">
                <form onSubmit={handleSub}>
                    <label htmlFor="title">
                        Title yozing
                        <input type="text" id="title" name="title" />
                    </label>
                    <label htmlFor="body">
                        Body yozing
                        <input type="text" id="body" name="body" />
                    </label>
                    <button>Yaratish</button>
                </form>
            </Modal>
            
        </div>
    )
}