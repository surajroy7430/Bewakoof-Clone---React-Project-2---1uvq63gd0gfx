import React from 'react';
import './Footer.css';
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
                            <h6>Customer Service</h6>
                            <ListGroup>
                                <ul>
                                    <li className='li'><Link>Contact Us</Link></li>
                                    <li className='li'><Link>Track Order</Link></li>
                                    <li className='li'><Link>Return Order</Link></li>
                                    <li><Link>Cancel Order</Link></li>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3} className='footerMenu'>
                            <h6>Company</h6>
                            <ListGroup>
                                <ul>
                                    <li className='li'><Link>About Us</Link></li>
                                    <li className='li'><Link>We're Hiring</Link></li>
                                    <li className='li'><Link>Terms & Conditions</Link></li>
                                    <li className='li'><Link>Privacy Policy</Link></li>
                                    <li><Link>Blog</Link></li>
                                </ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3} className='footerMenuSocial'>
                            <h6>Connect With Us</h6>
                            <ListGroup>
                                <ul className='socialIcons'>
                                    <li className='fb-insta'>
                                        <span className='facebook_logo'>
                                            <Link>
                                                <Facebook className="socialLogo fbLogo" /> 
                                                <span> 4.7M People Like this</span>
                                            </Link>
                                        </span>
                                        <span className='instagram_logo'>
                                            <Link>
                                                <Instagram className="socialLogo instaLogo" />
                                                <span> 1M Followers</span>
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <Link style={{marginRight: '10px'}}>
                                            <Twitter className="twitterLogo" />
                                        </Link>
                                        <Link style={{marginRight: '10px'}}>
                                            <Pinterest className="pinterestLogo" />
                                        </Link>
                                        <Link style={{marginRight: '10px'}}>
                                            <Apple className="appleLogo" />
                                        </Link>
                                        <Link>
                                            <GetApp className="downloadLogo" />
                                        </Link>
                                    </li>
                                </ul>
                            </ListGroup>
                        </Col>

                        <Col sm={6} md={3} className='footerMenuSearch'>
                            <h6 style={{paddingBottom: '1rem'}}>Keep up to date</h6>
                            <ListGroup>
                                <ul>
                                    <Form inline='true'>
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

                <section className='section2'>
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
                            <h6>Download the app</h6>
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
                        <Col sm={12} md={6} style={{padding: '8px 10px'}} className='securePayment'>
                            <ListGroup>
                                <h6>100% secure payment</h6>
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
                    &copy; {new Date().getFullYear()} All Rights Reserved by {' '}
                    <Link 
                        className="neon" 
                        target='_blank' 
                        rel='noreferrer' 
                        to='https://www.linkedin.com/in/surajroy7430'
                    >
                        Suraj Roy
                    </Link>
                </div>
                <div>
                    <span> Source On </span>
                    <Link
                        className='footer2_logo' 
                        target='_blank' 
                        rel='noreferrer' 
                        to='https://github.com/surajroy7430/Bewakoof-Clone---React-Project-2---1uvq63gd0gfx'
                    >
                        <GitHub className="githubLogo" />
                    </Link>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
