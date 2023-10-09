import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getHeaderWithProjectId } from '../utils/configs';
import { useAuth } from '../utils/AuthProvider';
import MensClothing from '../ProductsData/MensClothing';

const ProductsPage = () => {
  const { user } = useAuth();
  // console.log('user', user);
    const [products, setProducts] = useState([]);
    const limit = 15;

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();

        try {
            const productsData = await axios.get(
                `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products/?limit=${limit}`,
                config
            );
            
            // console.log(productsData);
            const productsList = productsData.data.data;
            setProducts(productsList);
        } catch (error) {
            console.error("Cannot found products", error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div>
      {
        products && <div>
            {products.map((p) => (
                <MensClothing key={p._id} {...p} />
            ))}
        </div>
      }
    </div>
  )
}

export default ProductsPage
