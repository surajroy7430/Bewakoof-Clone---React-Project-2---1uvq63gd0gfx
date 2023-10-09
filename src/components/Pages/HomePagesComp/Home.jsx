import React from 'react'
import CarouselComp from './CarouselComp'
import { Container, Image } from 'react-bootstrap'
import Add1 from './Adds/Add1'
import { Typography } from '@mui/material'
import Categories from './Adds/Categories'

const Home = () => {
  return (
    <div style={{marginTop: '100px'}}>
      <Container style={{width: '100%'}}>
        <CarouselComp />
        <Add1 />
        <Image 
          src='https://images.bewakoof.com/uploads/grid/app/desktop-deal-banner-Winterwear-1696765056.jpg'
          alt='winterwear_banner'
        />
        <div>
          <Typography variant='h2'>TRENDING CATEGORIES</Typography>
          <Categories />
        </div>
        <div>
          <Typography variant='h2'>TO HOT TO BE MISSED</Typography>
          <Image 
            src='https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-hygiene-revamp-B3999-1696669434.jpg'
            alt='DESKTOP-mid-size-hygiene-revamp'
          />
          <Image 
            src='https://images.bewakoof.com/uploads/grid/app/Trendy-Tshirt-at-flat-399-desktop-mid-size-banner--1--1696841594.jpg'
            alt='Trendy-Tshirt-at-flat-399'
          />
          <Image 
            src='https://images.bewakoof.com/uploads/grid/app/OOF-SALE-Desktop-id-Size-Banner--1696841980.jpg'
            alt='OOF-SALE-Desktop-id-Size-Banner'
            />
          <Image 
            src='https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-JOG-Common-callout-1696518937.jpg'
            alt='desktop-mid-size-hygiene-JOG-Common-callout'
          />
        </div>
        <Image 
            src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg'
            alt='become_a_tribe_member'
          />
        <Image 
            src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg'
            alt='vote_for_new_designs'
          />
      </Container>
    </div>
  )
}

export default Home