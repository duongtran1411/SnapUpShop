import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  HomePage,
  CategoryProducts,
  ProductSinglePage,
  CartPage,
  CategoryProduct,
  SearchPage,
} from "./pages/index";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Footer } from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/product/:id" element={<ProductSinglePage/>}/>

          <Route path="/category/:category" element={<CategoryProduct/>}/>

          <Route path="/cart" element={<CartPage/>}/>

          <Route path="/search/:searchItem" element={<SearchPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
