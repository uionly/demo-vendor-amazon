import React from 'react';
import {Nav} from 'react-bootstrap';
import NavStyle from '../Layout/NavStyle';


const NavHead = () => (
  <NavStyle>
      <Nav className="justify-content-center" defaultActiveKey='/'>
          <Nav.Item>
              <Nav.Link className="navlink" href='/' >Amazon Training</Nav.Link>
          </Nav.Item>
      </Nav>
    </NavStyle>
)
export default NavHead; 