import './Header.css'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

function NavBar() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' className='mt-5 py-4'>
            <MDBContainer fluid>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavNoTogglerSecond}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page'>
                                <Link to="/">HOME</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to="/prevtrans">PREVIOUS TRANSACTIONS</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to="/ftbr">FIRST TIME BUYER RESOURCES</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link to="/about">ABOUT ME</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavBar;
