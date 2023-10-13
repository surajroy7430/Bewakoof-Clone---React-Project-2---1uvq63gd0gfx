import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import '../styles/Home.css'

const MensCategories = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/mens-clothing');
    }

  return (
    <div>
      <Row fixed className='catogories'>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg' 
                    alt='printed_tshirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg' 
                    alt='oversized_tshirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg' 
                    alt='shorts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg' 
                    alt='joggers'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg' 
                    alt='vests'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
            <Col style={{cursor: 'pointer'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg' 
                    alt='fullsleeve_tshirts'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
            </Col>
        </Row>
    </div>
  )
}

export default MensCategories
