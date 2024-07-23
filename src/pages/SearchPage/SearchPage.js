import "./SearchPage.scss"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { STATUS } from "../../utils/status"
import { Loader } from "../../components/Loader/Loader"
import { ProductList } from "../../components/ProductList/ProductList"
export const SearchPage = () => {
    const {searchTerm} = useParams();
    return(
        <div>

        </div>
    )
}