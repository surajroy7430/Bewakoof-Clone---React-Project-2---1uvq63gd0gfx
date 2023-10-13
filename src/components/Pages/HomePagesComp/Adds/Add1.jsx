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
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg' 
                    alt='new_arrivals'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>New Arivals</Typography>
            </Col>
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif' 
                    alt='combos'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>Combos</Typography>
            </Col>
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg' 
                    alt='bestsellers'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>Bestsellers</Typography>
            </Col>
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg' 
                    alt='collaborations'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>Official Collaborations</Typography>
            </Col>
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg' 
                    alt='customization'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>Customization</Typography>
            </Col>
            <Col style={{cursor: 'pointer', textAlign: 'center'}}>
                <Image 
                    onClick={toProducts} 
                    src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg' 
                    alt='vote_for_design'
                    style={{width: '75%', height: 'auto'}}
                    thumbnail
                />
                <Typography style={{fontSize: '13px', fontWeight: 600}}>Vote for Designs</Typography>
            </Col>
        </Row>
    </div>
  )
}
export default Add1