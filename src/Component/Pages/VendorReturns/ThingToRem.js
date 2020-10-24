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

class ThingsToRem extends Component {
  render() {
      return <ContentText>
      <Accordion>
        <Card>
          <Card.Header className='cardHeader'>
            <Accordion.Toggle
              className='togglebox'
              as={FormText}
              eventKey='11'
            >
              Things You Need Everyday 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='11'>
            <Card.Body>
              <div className='Note'>
                A Start is with Goal, will end with Success.
              </div>
              <ListGroup className='listGrp'>
                <ListGroup.Item>
                <strong>Water Spider</strong>
                </ListGroup.Item>
                <ListGroup.Item>
               <strong>Pallet jack </strong> minimum  <span role='img' aria-label='number-3'>
                3️⃣
              </span> 
                </ListGroup.Item>
                <ListGroup.Item>
                <strong>Scan Gun </strong> minimum <span role='img' aria-label='number-2'>
                2️⃣
              </span>
                </ListGroup.Item>
                <ListGroup.Item><strong>Keep Blue Area Clean </strong></ListGroup.Item>
                <ListGroup.Item><strong>Move the Empty Tote to the Dock </strong></ListGroup.Item>
                <ListGroup.Item><strong>Keep Empty Pallets Ready to Move Items</strong></ListGroup.Item>
                <ListGroup.Item><strong>Printer No # lga9-prt-34</strong> for vendor returns printing</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ContentText>
  }

  
}

export default ThingsToRem;
