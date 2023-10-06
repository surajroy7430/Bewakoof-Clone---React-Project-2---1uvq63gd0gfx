import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getHeaderWithProjectId } from '../utils/configs';
import Products from '../ProductsData/Products.jsx';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const limit = 15;

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();

        try {
            const productsData = await axios.get(
                `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products/?limit=${limit}`,
                config
            );
            
            console.log(productsData);
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
                <Products key={p._id} {...p} />
            ))}
        </div>
      }
    </div>
  )
}

export default HomePage
