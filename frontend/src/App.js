import {useEffect} from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import LoginSignUp from './components/User/LoginSignUp';
import Account from './components/User/Account';
import store from "./store";
import { loadUser } from "./Actions/userAction";



function App() {

  useEffect(() => {
    

    store.dispatch(loadUser());


  }, []);

  


  return (
    <div className="app">
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product/:id" element={<ProductDetails/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route path="/products/:keyword" element={<Products/>}/>

      <Route path="/login" element={<LoginSignUp/>}/>
      <Route path="/logout" element={<LoginSignUp/>}/>
      <Route path="/myorders" element={<Home/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
    <Footer/>
    

    
    </div>
  );
}

export default App;
