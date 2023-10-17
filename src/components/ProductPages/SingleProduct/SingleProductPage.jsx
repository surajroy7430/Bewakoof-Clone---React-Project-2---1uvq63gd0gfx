import React, { useEffect, useState } from 'react'
import { getProductsDetails } from '../../utils/Apis';
import SingleProductDetails from './SingleProductDetails';
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

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
      {isLoading ? (
        <div className='fadeLoader'>
          <FadeLoader  color="#303231" height={50} margin={30} radius={2} width={7} />
        </div>
      ) : (
        <SingleProductDetails product={product} /> 
      )}
    </div>
  )
}

export default SingleProductPage
