import React from "react";
import styled from 'styled-components';

const Nav = styled.div`
background: #262F40;
color: white;
padding: 10px;
text-align: center;

.navlink{
    text-decoration: none;
    color: white;
    font-style: italic;
    font-weight: normal;
    font-size: 22px;
    padding:1px;
    border-bottom: 1px solid orange;
}
.navSubject{
    font-size: 18px;
    color: orange;
    text-decoration: none;
}

`
const NavStyle = ({children}) => (
    <Nav>
    <div>{children}</div>
    </Nav>
)

export default NavStyle;