import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion, Card, FormText } from 'react-bootstrap';

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

class GradingOverage extends Component {
  render() {
      return <ContentText>
      <Accordion>
      <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='9'
              >
                Grading
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='9'>
              <Card.Body className='cardBody'>
                {' '}
                FC Menu{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> More Choices  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Ecommerce Portal
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='10'
              >
                OverAge Tote's
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='10'>
              <Card.Body className='cardBody'>
                {' '}
               Coming soon <span role='img' aria-label='arrow'>
                  ➡️ 
                </span> {' '}
                Coming soon{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Coming soon  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Coming soon  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Coming soon
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
      </Accordion>
    </ContentText>
  }
}

export default GradingOverage;
