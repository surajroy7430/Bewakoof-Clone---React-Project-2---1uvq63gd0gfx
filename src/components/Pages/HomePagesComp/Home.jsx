import React, { useEffect, useState } from 'react'
import './styles/Home.css';
import CarouselComp from './CarouselComp'
import { Container, Image } from 'react-bootstrap'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { FadeLoader } from 'react-spinners'
import Add1 from './Adds/Add1'
import MensCategories from './Adds/MensCategories'
import WomensCategories from './Adds/WomensCategories'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, []);

  const navigate = useNavigate();
  const toMensProducts = () => {
    navigate('/mens-clothing');
  }
  const toWomensProducts = () => {
    navigate('/womens-clothing');
  }
  
  

  return (
    <div style={{marginTop: '100px'}}>
      <Container fluid>
        {isLoading ? (
          <div className='fadeLoader'>
            <FadeLoader  color="#303231" height={50} margin={30} radius={2} width={7} />
          </div>
        ) : (
        <>
          <CarouselComp />
          <div className='categories-container'>
            <Add1 />
          </div>
          <div className='designs-of-the-week'>
            <Typography variant='h5' textAlign='center'>Designs of the Week</Typography>
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1696916713.jpg'
              alt='shop-for-mens'
              style={{cursor: 'pointer', width: '50%'}}
              onClick={toMensProducts}
            />
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1696916708.jpg'
              alt='shop-for-womens'
              style={{cursor: 'pointer', width: '50%'}}
              onClick={toWomensProducts}
            />
          </div>
          <Image 
            src='https://images.bewakoof.com/uploads/grid/app/desktop-deal-banner-Winterwear-1696765056.jpg'
            alt='winterwear_banner'
            style={{width: '100%'}}
          />
          <div className='categories-container'>
            <Typography variant='h5' textAlign='center'>TRENDING CATEGORIES</Typography>
            <MensCategories />
            <WomensCategories />
          </div>
          <div className='missed-container'>
            <Typography variant='h5' textAlign='center'>TO HOT TO BE MISSED</Typography>
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-hygiene-revamp-B3999-1696669434.jpg'
              alt='DESKTOP-mid-size-hygiene-revamp'
              style={{width: isSM ? '100%' : '50%'}}
            />
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/Trendy-Tshirt-at-flat-399-desktop-mid-size-banner--1--1696841594.jpg'
              alt='Trendy-Tshirt-at-flat-399'
              style={{width: isSM ? '100%' : '50%'}}
            />
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-Fullsleeve--1--1697004063.jpg'
              alt='OOF-SALE-Desktop-id-Size-Banner'
              style={{width: isSM ? '100%' : '50%'}}
              />
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-JOG-Common-callout-1696518937.jpg'
              alt='desktop-mid-size-hygiene-JOG-Common-callout'
              style={{width: isSM ? '100%' : '50%'}}
            />
          </div>
          <div>
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg'
              alt='become_a_tribe_member'
              style={{width: '100%'}}
            />
          </div>
          <div>
            <Image 
              src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg'
              alt='vote_for_new_designs'
              style={{width: '100%'}}
            />
          </div>
        </>
        )}
      </Container>
    </div>
  )
}

export default Home