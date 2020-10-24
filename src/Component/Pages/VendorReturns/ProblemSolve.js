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

class ProblemSolve extends Component {
  render() {
      return <ContentText>
      <Accordion>
      <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='5'
              >
                Label Printing and Rodio
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='5'>
              <Card.Body className='cardBody'>
                <div className='SubHead'>For printing label they are <span role='img' aria-label='number-2'>
                  2️⃣
                </span> methods to be followed </div>
                <ListGroup className='listGrp'>
                  <ListGroup.Item> <span role='img' aria-label='number-1'>
                  1️⃣
                </span> Search Barcode in Rodio</ListGroup.Item>
                  <ListGroup.Item> <span role='img' aria-label='number-2'>
                  2️⃣
                </span> Print the Label </ListGroup.Item>
                </ListGroup>
                <div className='headDiv'>
                  <div className='subDiv'>
                  <span role='img' aria-label='number-1'>
                  1️⃣
                </span> <strong>Search Barcode in Rodio</strong>
                  </div>
                  <Card.Body>
                     LGA9-portal.amazon.com <span role='img' aria-label='arrow'>
                  ➡️
                </span> Work Flow <span role='img' aria-label='arrow'>
                  ➡️
                </span> Scan tote in search box
                  </Card.Body>
                </div>
                <div className='headDiv'>
                  <div className='subDiv'>
                  <span role='img' aria-label='number-2'>
                  2️⃣
                </span> <strong> Print the label</strong>
                  </div>
                  <Card.Body>
                     Fc Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Problem Solve <span role='img' aria-label='arrow'>
                  ➡️
                </span> Io Print  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Select ASIN
                  </Card.Body>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
    </ContentText>
  }

  
}

export default ProblemSolve;



