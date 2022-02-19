import React, { Fragment, useEffect } from 'react';
import ProductCard from "./ProductCard.js";
import "./Home.css";
import MetaData from '../layouts/MetaData.js';
import {useSelector, useDispatch} from 'react-redux';
import { getProduct } from '../../Actions/productAction.js';
import Loader from '../layouts/Loader/Loader.js';
import { useAlert } from 'react-alert';




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
  },[dispatch, error, alert])

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