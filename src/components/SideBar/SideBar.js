import "./SideBar.scss";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getSideBarStatus, setSidebarOff } from "../../store/sidebarSlice";
import { useEffect } from "react";
import { fetchAsyncCategories, getAllCategories } from "../../store/categorySlice";
export const SideBar = () => {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSideBarStatus);
    const categories = useSelector(getAllCategories);
    useEffect(()=>{
        dispatch(fetchAsyncCategories());
    },[dispatch]);
    return(
        <aside className={`sidebar ${isSidebarOn ? "hide-sidebar":""}`}>
                <button type="button" className="sidebar-hide-btn" onClick={()=>dispatch(setSidebarOff())}>
                    <i className="fas fa-times"></i>
                    <div className="sidebar-cnt">
                        <div className="car-title fs-17 text-uppercase fw-6 ls-1h">
                            All Categories
                        </div>
                        <ul className="cat-list">
                            {categories.map((category, index)=>{
                                return(
                                    <li key={index} onClick={()=>dispatch(setSidebarOff())}>
                                        <Link to={`category/${category}`} className="cat-list-link text-capitalize">
                                            {category.replace("-", " ")}
                                        </Link>
                                    </li>
                                )
                                
                            })}
                        </ul>
                        <hr style={{color:"#ddd"}}></hr>
                    </div>
                </button>
        </aside>
    )   
}