import React from 'react'
import { Nav } from 'react-bootstrap';
import NavStyle from '../Layout/NavStyle';

const NavSubject = () => (
    <NavStyle>
        <Nav className="justify-content-center"fill variant='tabs' >
            <Nav.Item>
                <Nav.Link className="navSubject"  href='/Ambassador'>Ambassador</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navSubject" href='/VendorReturns'>Vendor Returns</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navSubject" href='/pa'>Process Assistant</Nav.Link>
            </Nav.Item>
        </Nav>
    </NavStyle>
)

export default NavSubject;