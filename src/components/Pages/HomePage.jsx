import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getHeaderWithProjectId } from '../utils/configs';
import Products from '../../ProductComponets/Products';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();

        try {
            const productsData = await axios.get(
                'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products/?limit=10',
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
