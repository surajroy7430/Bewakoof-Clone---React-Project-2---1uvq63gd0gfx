import React, { useEffect, useState } from 'react'
import { getProductsDetails } from '../utils/Apis';
import SingleProductDetails from './SingleProductDetails';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDetails = await getProductsDetails(productId);
        setProduct(productDetails);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);
  return (
    <div>
      <SingleProductDetails product={product} />
    </div>
  )
}

export default SingleProductPage
