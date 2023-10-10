import { Typography } from '@mui/material';
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Add1 = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/mens-clothing');
    }

  return (
    <div>
        <Row fixed className='catogories'>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg' 
                    alt='new_arrivals'
                    thumbnail
                />
                <Typography>New Arivals</Typography>
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif' 
                    alt='combos'
                    thumbnail
                />
                <Typography>Combos</Typography>
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg' 
                    alt='bestsellers'
                    thumbnail
                />
                <Typography>Bestsellers</Typography>
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg' 
                    alt='collaborations'
                    thumbnail
                />
                <Typography>Official Collaborations</Typography>
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg' 
                    alt='customization'
                    thumbnail
                />
                <Typography>Customization</Typography>
            </Col>
            <Col xs={6} md={2} style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg' 
                    alt='vote_for_design'
                    thumbnail
                />
                <Typography>Vote for Designs</Typography>
            </Col>
        </Row>
    </div>
  )
}
export default Add1