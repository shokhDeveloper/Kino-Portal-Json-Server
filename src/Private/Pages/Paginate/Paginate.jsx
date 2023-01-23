import "./Paginate.css"
import ReactPaginate from "react-paginate"
import { useContext } from "react"
import { Context } from "../../../Context/Context"

export const Paginate = ({totalPage}) => {
    const {setActivePage} = useContext(Context)
    const handleChange = (event) => {
        setActivePage(event.selected+1)
    }
    return(
        <div className="pagination">
                <ReactPaginate onPageChange={handleChange} pageCount={totalPage} previousClassName="previous" nextClassName="previous" nextLinkClassName="previous_link"  pageClassName="page" pageLinkClassName="page_link" previousLinkClassName="previous_link" className="paginate"> </ReactPaginate>            
        </div>
    )
}