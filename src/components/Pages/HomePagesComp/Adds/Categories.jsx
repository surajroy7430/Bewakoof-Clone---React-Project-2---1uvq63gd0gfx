import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';

const Categories = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/mens-clothing');
    }

  return (
    <div>
      <Row fixed>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg' 
                    alt='printed_tshirts'
                    thumbnail
                />
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg' 
                    alt='oversized_tshirts'
                    thumbnail
                />
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg' 
                    alt='shorts'
                    thumbnail
                />
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg' 
                    alt='joggers'
                    thumbnail
                />
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg' 
                    alt='vests'
                    thumbnail
                />
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg' 
                    alt='fullsleeve_tshirts'
                    thumbnail
                />
            </Col>
        </Row>
    </div>
  )
}

export default Categories
