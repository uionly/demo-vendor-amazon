import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const WrapperStyle = styled.div`
  .jumbo {
    background: white;
    color: black;
    border: 2px solid #262F40;
    margin: 3%;
  }
`;

const Wrapper = ({ Children }) => (
  <WrapperStyle>
    <Jumbotron className='jumbo'>{Children}</Jumbotron>
  </WrapperStyle>
);

export default Wrapper;
 