import React, {  Component } from 'react';
import Wrapper from '../Layout/Container';
import styled from 'styled-components';
import {Accordion, Card, FormText } from 'react-bootstrap';

const ContentText = styled.div`
margin: 2%;
text-align: center;
.cardHeader
{
    background: #262F40;
    border: 1px solid white;
}
.togglebox{
    text-decoration: none;
    color: #509dda;
    font-size: 18px;

    &:hover{
        text-decoration: none;
        border: none;
        cursor: pointer;
    }
}

`

class Ambassador extends Component {
  render() {
    const greeting = <ContentText >
       <Accordion>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText}  eventKey="4" >
       Day 1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body className="cardBody"> FC Menu ➡️ Outbond ➡️ Pack App Removals ➡️Destroys</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</ContentText>;
    return <Wrapper Children={greeting} />;
  }
}
export default Ambassador;