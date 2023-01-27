import "./Modal.css"
import { useContext } from "react"
import { Context } from "../../Context/Context"

export const Modal = ({children, title, modal, setModal}) => {
    let overlayStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: modal === true? "flex": "none",
        alignItems: "center",
        justifyContent: "center"
    }
    let modalStyle = {
        width: "50%",
        margin: "0 auto",
        padding: "1rem",
        background: "#fff",
        margin: "0 auto"
    }
    return(
        <div className="overlay" style={overlayStyle}>
            <div className="modal" style={modalStyle}>
                <h3 style={{color: "#000"}}>{title}</h3>
                {children}
            </div>
        </div>
    )
}