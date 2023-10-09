import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CarouselComp = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/mens-clothing');
    }
  return (
    <Carousel fade={true} pause={false}>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100' 
                src='https://images.bewakoof.com/uploads/grid/app/LOKI-1x1-revised-01-1696596677.jpg' 
                alt='first_slide'
                style={{cursor: 'pointer'}} 
                onClick={toProducts}
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100' 
                src='	https://images.bewakoof.com/uploads/grid/app/1x1-b31199-1696669433.jpg' 
                alt='second_slide'
                style={{cursor: 'pointer'}}
                onClick={toProducts}
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100' 
                src='https://images.bewakoof.com/uploads/grid/app/1x1-B1G1F-1696841980.jpg' 
                alt='third_slide'
                style={{cursor: 'pointer'}}
                onClick={toProducts}
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img 
                className='d-block w-100' 
                src='https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-SweatsHoods-common-prrinted--1--1696841595.jpg' 
                alt='fourth_slide'
                style={{cursor: 'pointer'}}
                onClick={toProducts}
            />
        </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComp
