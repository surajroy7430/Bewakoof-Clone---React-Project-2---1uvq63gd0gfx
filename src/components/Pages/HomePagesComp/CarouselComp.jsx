import React from 'react';
import './styles/Home.css';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const CarouselComp = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/men-clothing');
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
  return (
    <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={responsive !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/1x1-static-resort-01--1--1697112502.jpg' 
                alt='first_slide'
                style={{cursor: 'pointer', width: '100%'}} 
                onClick={toProducts}
            />
        </div>
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/1x1-b31199-1696669433.jpg' 
                alt='second_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/1x1-B1G1F-1696841980.jpg' 
                alt='third_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/1x1-static-naruto-Graphic-1-1697689879.jpg' 
                alt='fourth_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/OOF-SALE-1X1--Common-1697260026.jpg' 
                alt='fifth_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
    </Carousel>
  )
}

export default CarouselComp
