import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import '../styles/Home.css'

const WomensCategories = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/womens-clothing');
    }

  return (
    <div>
      <Row fixed className='catogories'>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg' 
                    alt='printed_tshirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png' 
                    alt='oversized_tshirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg' 
                    alt='fashion_tops'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png' 
                    alt='joggers'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg' 
                    alt='dresses'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg' 
                    alt='boyfriend_t-shirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
        </Row>
    </div>
  )
}

export default WomensCategories
