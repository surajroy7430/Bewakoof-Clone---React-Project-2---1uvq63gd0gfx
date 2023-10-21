import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import OrderDetails from './OrderDetails'
import { getOnePlacedOrderDetail } from '../../utils/Apis';

const OrderDetailsAPI = () => {
  const { orderId } = useParams();
  const [orders, setOrders] = useState([]);
  const authToken = localStorage.getItem("authToken")

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const ordersDetails = await getOnePlacedOrderDetail(orderId);
        setOrders(ordersDetails);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);
  
  return (
    <div>
      {isLoading ? (
        <div className='fadeLoader'>
          <FadeLoader  color="#303231" height={50} margin={30} radius={2} width={7} />
        </div>
      ) : (
        <OrderDetails orders={orders} /> 
      )}
    </div>
  )
}

export default OrderDetailsAPI
