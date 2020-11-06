import React from 'react';
import './NavBar.css';
import bannerImg from './images/banner.jpg';
import bannerImgSmall from './images/banner-small.jpg';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
        return (
            <div className="NavBar">
                <div className="banner container p-0 m-0">
                    <img src={bannerImg} alt="banner_image" id="bannerImg1" />
                    <img src={bannerImgSmall} alt="banner_image" id="bannerImg2" />
                </div>
                <div>
                <Navbar className="nav1" variant="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Home/Bio</Nav.Link>
                            <Nav.Link href="#">Music</Nav.Link>
                            <Nav.Link href="#">Virtual Instruments</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        )
}

export default NavBar;
