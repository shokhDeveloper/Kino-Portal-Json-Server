import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../Context/Context"
import { Modal } from "./Modal"

export const Myposts = ({title, id, joyida}) => {
    let [modal, setModal] = useState(!true)
    const {user} = useContext(Context)
    let date = new Date()
    let locals = date.toLocaleDateString()
    let hours = date.getHours().toString().padStart(2, "0")
    let minuts = date.getMinutes().toString().padStart(2, "0")
    const handleSub = (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        axios({
            method: "PUT",
            url: `http://localhost:8888/posts/${id}`,
            data: {
                id,
                title: data.get("title"),
                body: data.get("body"),
                date: locals +
                + "-"+hours+":"+minuts +" "+ "Create-At",
                user_id: user.id,
                author: user.firstname + " " + user.lastname
            }
        }).then((response) => {
            if(response.status === 200){
                setModal(!modal)
                console.log(response.data)
            }
        })
        joyida()
    }   
    const handleDelete = async() => {
        let jsons  =await axios({
            method: "DELETE",
            url: `http://localhost:8888/posts/${id}`
        }).catch((error) => console.log(error))
        let response = await jsons.data
        console.log(response)
        joyida()
      
    }
        return(
        <>
            <li style={{width: "50%", display: "flex", justifyContent: "space-between", background:"#FFF", color: "#000", margin: "1rem auto",padding: "1rem", alignItems: "center" }}>
                <h3>{title}</h3>
                <button style={{background: "crimson", padding: "0.5rem 1rem", color: "#000", fontSize: "18px", border: "1px solid transparent"}} onClick={() => setModal(!modal)}>Yangilash</button>
            </li>
            <Modal modal={modal} setModal={setModal} title="Postni yangilash">
                <form onSubmit={handleSub}>
                    <input type="text" name="title" />
                    <input type="text" name="body" />
                    <button>yangilash</button>
                </form>
                <button onClick={handleDelete}>O'chirish</button>
            </Modal>
        </>
        
    )
}