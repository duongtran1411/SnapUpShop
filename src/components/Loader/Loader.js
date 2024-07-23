import { loader } from "../../utils/images"
import "./Loader.scss";
export const Loader = () => {
    return(
        <div className="container">
            <div className="loader flex justify-center align-center">
                <img src={loader} alt=""/>
            </div>
        </div>
    )
    
}