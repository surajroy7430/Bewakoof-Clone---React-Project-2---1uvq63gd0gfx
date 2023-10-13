import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom'
import './styles/Home.css'

const CarouselComp = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/mens-clothing');
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
                className='d-block w-100' 
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
                alt='second_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
        <div>
            <img 
                src='https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-SweatsHoods-common-prrinted--1--1696841595.jpg' 
                alt='second_slide'
                style={{cursor: 'pointer', width: '100%'}}
                onClick={toProducts}
            />
        </div>
    </Carousel>
    // <Carousel>
    //     <Carousel.Item interval={2000}>
            // <img 
            //     className='d-block w-100' 
            //     src='https://images.bewakoof.com/uploads/grid/app/1x1-static-resort-01--1--1697112502.jpg' 
            //     alt='first_slide'
            //     style={{cursor: 'pointer', width: '40%'}} 
            //     onClick={toProducts}
            // />
    //     </Carousel.Item>
    //     <Carousel.Item interval={3000}>
            // <img 
            //     className='d-block w-100' 
            //     src='	https://images.bewakoof.com/uploads/grid/app/1x1-b31199-1696669433.jpg' 
            //     alt='second_slide'
            //     style={{cursor: 'pointer', width: '40%'}}
            //     onClick={toProducts}
            // />
    //     </Carousel.Item>
    //     <Carousel.Item interval={3000}>
    //         <img 
    //             className='d-block w-100' 
    //             src='https://images.bewakoof.com/uploads/grid/app/1x1-B1G1F-1696841980.jpg' 
    //             alt='third_slide'
    //             style={{cursor: 'pointer', width: '40%'}}
    //             onClick={toProducts}
    //         />
    //     </Carousel.Item>
    //     <Carousel.Item interval={3000}>
    //         <img 
    //             className='d-block w-100' 
    //             src='https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-SweatsHoods-common-prrinted--1--1696841595.jpg' 
    //             alt='fourth_slide'
    //             style={{cursor: 'pointer', width: '40%'}}
    //             onClick={toProducts}
    //         />
    //     </Carousel.Item>
    // </Carousel>
  )
}

export default CarouselComp
