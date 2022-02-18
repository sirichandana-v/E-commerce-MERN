import React, { Fragment, useEffect } from 'react';
import ProductCard from "./ProductCard.js";
import "./Home.css";
import MetaData from '../layouts/MetaData.js';
import {useSelector, useDispatch} from 'react-redux';
import { getProduct } from '../../Actions/productAction.js';
import Loader from '../layouts/Loader/Loader.js';
import { useAlert } from 'react-alert';

const product={
  name:"shirt",
  price:"56556",
  _id:"475454776567",
  images:[{url:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}]
};


function Home() {

  const alert=useAlert();
  const dispatch=useDispatch();
  const {loading,error,products,productsCount}=useSelector(state=>state.products);
  
  useEffect(()=>{
    if(error)
    {
      return alert.error(error)
    }
    dispatch(getProduct())
  },[dispatch, error])

  return (
    <div className='home'>
    {loading? <Loader/>:
    (<Fragment>
      <MetaData  title="E-commerce"/>
        <img className="home_banner"  src="banner.jpg" alt="banner" />
        <h2>Products</h2>

        <div className="home__container">
            {products && products.map(product=>(<ProductCard key={product._id} product={product}/>))}
        </div>
    </Fragment>)
    }
    
    </div>
  )
}

export default Home