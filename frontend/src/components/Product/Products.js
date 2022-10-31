import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import ProductCard from "../Home/ProductCard";
import MetaData from '../layouts/MetaData.js';
import {useSelector, useDispatch} from 'react-redux';
import { clearErrors, getProduct } from '../../Actions/productAction.js';
import Loader from '../layouts/Loader/Loader.js';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

function Products() {

    const alert=useAlert();
    const dispatch=useDispatch();
    const { keyword } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const {loading,error,products, productCount, resultPerPage, filteredProductsCount}=useSelector(state=>state.products);
    const [price, setPrice] = useState([0, 85000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    
    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
      setPrice(newPrice);
    };
    let count = filteredProductsCount;

    useEffect(()=>{
        if(error)
        {
          alert.error(error);
          dispatch(clearErrors())
        }
        dispatch(getProduct(keyword, currentPage,price, category, ratings))
      },[dispatch, error, alert, keyword, currentPage,price, category, ratings])

      console.log(resultPerPage,productCount);
  return (
    <div className="products">
    {loading? <Loader/>:
    (<Fragment>
      <MetaData  title="products--ecommerce"/>
        

        <div className="products__filter">
        <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={85000}
            />

            <Typography>Categories</Typography>
            <ul className="products__categoryBox">
              {categories.map((category) => (
                <li
                  className="products__categoryLink"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
        </div>
        <div className="products__box">
        <div className="products__container">
            {products && products.map(product=>(<ProductCard key={product._id} product={product}/>))}
        </div>
        
        {(resultPerPage<count) && (
        <div className="products__paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="products__pageItem"
                linkClass="products__pageLink"
                activeClass="products__pageItem--active"
                activeLinkClass="products__pageLink--active"
              />
            </div>
        )}
        </div>
        
        

        
    </Fragment>
    )}

    </div>
  
  )
        }

export default Products