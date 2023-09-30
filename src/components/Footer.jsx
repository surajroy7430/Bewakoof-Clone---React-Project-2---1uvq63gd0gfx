import React from 'react';
import '../styles/Footer.css';
import { 
    Apple, 
    CurrencyRupeeSharp, 
    Facebook, 
    GetApp, 
    GitHub, 
    History, 
    Instagram, 
    Pinterest, 
    Twitter 
} from '@mui/icons-material';
import { Col, Container, Form, Image, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid style={{paddingTop: '5rem'}}>
            <footer className='footer-container1'>
                <div className='footerLogo'>
                    <Row>
                        <Col sm={12}>
                            <Link to='/'>
                                Bewakoof<sup>&#174;</sup>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <section>
                    <Row>
                        <Col sm={6} md={3} className='footerMenu'>
                            <heading>Customer Service</heading>
                            <ListGroup>
                                <ul>
                                    <li><Link>Contact Us</Link></li>
                                    <li><Link>Track Order</Link></li>
                                    <li><Link>Return Order</Link></li>
                                    <li><Link>Cancel Order</Link></li>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3} className='footerMenu'>
                            <heading>Company</heading>
                            <ListGroup>
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>We're Hiring</Link></li>
                                    <li><Link>Terms & Conditions</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Blog</Link></li>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3} className='footerMenu'>
                            <heading>Connect With Us</heading>
                            <ListGroup>
                                <ul>
                                    <div className='fb-insta'>
                                        <div className='facebook_logo'>
                                            <Link>
                                                <Facebook className="socialLogo fbLogo" /> 4.7M People Like this
                                            </Link>
                                        </div>
                                        <div className='instagram_logo'>
                                            <Link>
                                                <Instagram className="socialLogo instaLogo" /> 1M Followers
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Link style={{marginRight: '7px'}}>
                                            <Twitter className="twitterLogo" />
                                        </Link>
                                        <Link style={{marginRight: '7px'}}>
                                            <Pinterest className="pinterestLogo" />
                                        </Link>
                                        <Link style={{marginRight: '7px'}}>
                                            <Apple className="appleLogo" />
                                        </Link>
                                        <Link>
                                            <GetApp className="downloadLogo" />
                                        </Link>
                                    </div>
                                </ul>
                            </ListGroup>
                        </Col>

                        <Col sm={6} md={3} className='footerMenu'>
                            <heading style={{paddingBottom: '1rem'}}>Keep up to date</heading>
                            <ListGroup>
                                <ul>
                                    <Form inline>
                                        <InputGroup>
                                            <input type='email' required placeholder='Enter Email Id' />
                                            <button type="submit">SUBSCRIBE</button>
                                        </InputGroup>
                                    </Form>
                                </ul>
                            </ListGroup>
                        </Col>
                    </Row>
                </section>

                <section style={{paddingTop: '4rem'}}>
                    <Row>
                        <Col sm={6} md={3}>
                            <ListGroup>
                                <ul style={{paddingBottom: '5px'}}>
                                    <small>
                                        <History className="historyLogo" fontSize='small' />
                                    </small>
                                    <Link style={{paddingLeft: '5px'}}>
                                        15 Days return policy*
                                    </Link>
                                </ul>
                                <ul>
                                    <small>
                                        <CurrencyRupeeSharp className="rupeeLogo" fontSize='small' />
                                    </small>
                                    <Link style={{paddingLeft: '5px'}}>
                                        Cash On Delivery*
                                    </Link>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3}>
                            <heading>Download the app</heading>
                            <ListGroup>
                                <ul>
                                    <Link 
                                        target='_blank' 
                                        rel='noreferrer' 
                                        to='https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en' 
                                        style={{paddingRight: '0.5rem'}}    
                                    >
                                        <Image 
                                            width='120px'
                                            src='https://images.bewakoof.com/web/app_android_v1.png' 
                                            alt='android_app' 
                                            className='android_app'
                                            thumbnail
                                        />
                                    </Link>
                                    <Link 
                                        target='_blank' 
                                        rel='noreferrer' 
                                        to='https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8' 
                                    >
                                        <Image 
                                            width='120px'
                                            src='https://images.bewakoof.com/web/app_ios_v1.png' 
                                            alt='ios_app' 
                                            className='ios_app'
                                            thumbnail
                                        />
                                    </Link>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md={6} style={{padding: '8px 10px'}}>
                            <ListGroup>
                                <heading>100% secure payment</heading>
                                <ul>
                                    <Image 
                                        width='350px'
                                        src='https://images.bewakoof.com/web/secure-payments-image.png'
                                        alt='secure_payments'
                                        fluid
                                    />
                                </ul>
                            </ListGroup>
                        </Col>
                    </Row>
                </section>
            </footer>
            <footer className='footer-container2'>
                <div>
                    <h5>&copy; {new Date().getFullYear()} All Rights Reserved by {' '}
                        <Link 
                            className="neon" 
                            target='_blank' 
                            rel='noreferrer' 
                            to='https://www.linkedin.com/in/suraj-roy-317515143'
                        >
                            Suraj Roy
                        </Link>
                        <span> | Source On </span>
                        <Link
                            className='footer2_logo' 
                            target='_blank' 
                            rel='noreferrer' 
                            to='https://github.com/surajroy7430/Bewakoof-Clone---React-Project-2---1uvq63gd0gfx'
                        >
                            <GitHub className="githubLogo" />
                        </Link>
                    </h5>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
