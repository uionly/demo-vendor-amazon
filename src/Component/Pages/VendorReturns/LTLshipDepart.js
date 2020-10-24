import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion, Card, FormText, ListGroup } from 'react-bootstrap';

const ContentText = styled.div`
  .cardHeader {
    background: #262f40;
    border: 1px solid white;
  }
  .togglebox {
    text-decoration: none;
    color: #509dda;
    font-size: 18px;

    &:hover {
      text-decoration: none;
      border: none;
      cursor: pointer;
    }
  }
  .listGrp {
    text-align: left;
    border-radius: 0;
  }
  .Note {
    background: orange;
    padding: 2%;
  }
  .SubHead {
    background: #509dda;
    padding: 2%;
  }
  .headDiv {
    padding: 2%;
    margin: 1;
    border: 1px solid #262f40;
    text-align: left;
  }
  .subDiv {
    background: orange;
  }
`;

class LTLshipDepart extends Component {
  render() {
      return <ContentText>
      <Accordion>
      <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='6'
              >
                LTL Palletize and Ship
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='6'>
              <Card.Body className='cardBody'>
              <div className='SubHead'><strong>Pallatize</strong> </div>
              <ListGroup>
                <ListGroup.Item>FC Menu{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> FROST <span role='img' aria-label='arrow'>
                  ➡️
                </span> LTL Window <span role='img' aria-label='arrow'>
                  ➡️
                </span> Click Top Left Palletize</ListGroup.Item>
              </ListGroup>
                <div className='Note'>
                  Make sure you have <strong>Successfully added </strong> to the 
                  pallet, if no such response is recieved then do the whole 
                  process of LTL Pallatize <strong>again</strong>.
                </div>
              </Card.Body>
            </Accordion.Collapse> 
          </Card>
      </Accordion>
    </ContentText>
  }

  
}

export default LTLshipDepart;
