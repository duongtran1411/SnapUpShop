import "./HomePage.scss";
import {HeaderSlider} from "../../components/Slider/HeaderSlider";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import {ProductList} from "../../components/ProductList/ProductList"
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from "../../store/productSlice";
import {Loader} from "../../components/Loader/Loader";
import { STATUS } from "../../utils/status";
export const HomePage = () => {
    const dispatch = useDispatch();
    const catgories = useSelector(getAllCategories);
    useEffect(()=>{
        dispatch(fetchAsyncProducts(50));
    },[])

    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductsStatus);


    const temProducts = [];
    if(products.length > 0){
        for (const i in products) {
            let randomIndex = Math.floor(Math.random() * products.length)
            while(temProducts.includes(products[randomIndex])){
                randomIndex = Math.floor(Math.random() * products.length)
            }
            temProducts[i] = products[randomIndex];
        }
    }

    let catProductOne = products.filter(product => 
        product.category === catgories[0]
    )
    let catProductTwo = products.filter(product => 
        product.category === catgories[1]
    )
    let catProductThree = products.filter(product => 
        product.category === catgories[2]
    )
    let catProductFour = products.filter(product => 
        product.category === catgories[3]
    )

    return(
        <main>
            <div className="slider-wrapper">
                <HeaderSlider/>
            </div>
            <div className="main-content bg-whitesmoke">
                <div className="container">
                    <div className="categories py-5">
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>See our products</h3>
                              
                            </div>      
                            {productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={temProducts}/> }
                        </div>
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>{catgories[0]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ?  <Loader/> : 
                            <ProductList products={catProductOne}/>}
                        </div>
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>{catgories[1]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ?  <Loader/> : 
                            <ProductList products={catProductTwo}/>}
                        </div>
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>{catgories[2]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ?  <Loader/> : 
                            <ProductList products={catProductThree}/>}
                        </div>
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>{catgories[3]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ?  <Loader/> : 
                            <ProductList products={catProductFour}/>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

