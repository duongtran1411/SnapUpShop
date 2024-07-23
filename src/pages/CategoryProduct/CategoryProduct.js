import { useEffect } from "react"
import "./CategoryProduct.scss"
import {ProductList} from "../../components/ProductList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsByCategory, getCategoryProductStatus, fetchAsyncProductsOfCategory } from "../../store/categorySlice";
import { STATUS } from "../../utils/status";
import { Loader } from "../../components/Loader/Loader";
export const CategoryProduct = () => {
    const dispatch = useDispatch();
    const {category} = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductStatus = useSelector(getCategoryProductStatus);
    useEffect(()=>{
        dispatch(fetchAsyncProductsOfCategory(category));
    },[dispatch, category]);

    return(
        <div className="cat-products py-5 bg-whitesmoke">
            <div className="container">
                <div className="cat-products-content">
                    <div className="title-md">
                        <h3>See our: <span className="text-capitalize">{category.replace("-", " ")}</span></h3>
                    </div>
                    {
                        categoryProductStatus === STATUS.LOADING ? <Loader/> : <ProductList products={categoryProducts}/>
                    }
                </div>
            </div>
        </div>
    )
}