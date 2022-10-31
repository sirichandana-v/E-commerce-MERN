import React from "react";
import "./ProductDetails.css";
import {useSelector, useDispatch} from "react-redux";
import MetaData from '../layouts/MetaData.js';
import { clearErrors, getProductDetails } from "../../Actions/productAction";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../layouts/Loader/Loader";
import {useAlert} from "react-alert";



const ProductDetails =()=> {

  const dispatch=useDispatch();
  const {product,loading, error}=useSelector(state=>state.productDetails);
  const alert = useAlert();
  
  const { id } = useParams();

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id))
  },[dispatch, id, error, alert])


  const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth<600 ?20:25,
    value:product.ratings,
    isHalf:"true",
  }


  return (
    <>
    {loading ? (
        <Loader />
      ) : (
        <>
        <MetaData  title={`${product.name}--ecommerce`}/>
    <div className="productDetails">
      <div>
        {product.images &&
          product.images.map((item, i) => (
            <img
              className="productDetails__image"
              key={i}
              src={item.url}
              alt={`${i} Slide`}
            />
          ))}
        </div>
       
      <div className="productDetails__info">
      <div className="productDetails__block1">
        <h2>{product.name}</h2>
        <p>Product # {product._id}</p>
      </div>
      <div className="productDetails__block2">
      <ReactStars {...options}/><span>({product.numOfReviews}Reviews)</span>
        <span>
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <div className="productDetails__block3">
        <h1>{`₹${product.price}`}</h1>
        <div className=".productDetails__block3_1">
          <div className="productDetails__block3_1_1">
            <button >-</button>
            <input readOnly type="number" value={product.stock}/>
            <button >+</button> 
          </div>
          <button className="productDetails__block3Button"
            disabled={product.Stock < 1 ? true : false}
          >
            Add to Cart
          </button>
        </div>

        <p>
          Status:
          <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
            {product.Stock < 1 ? "OutOfStock" : "InStock"}
          </b>
        </p>
      </div>

      <div className="productDetails__block4">
        Description : <p>{product.description}</p>
      </div>
      </div>
      </div>
      
      <h3 className="reviewsHeading">REVIEWS</h3>
      {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
          </>

          )}
      
    
    </>
  );
}

export default ProductDetails;


