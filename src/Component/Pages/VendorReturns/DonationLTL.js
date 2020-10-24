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

class DonationLTL extends Component {
  render() {
    return (
      <ContentText>
        <Accordion>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='2'
              >
                LTL
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                {' '}
                FC Menu{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Outbond{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Pack App Removals{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                LTL Liquidations And Vendor Returns
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='3'
              >
                Donation
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                {' '}
                FC Menu{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Reverse Logistics{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                More Choices{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                PNP Web App
              </Card.Body>
            </Accordion.Collapse>
          </Card>{' '}
        </Accordion>
      </ContentText>
    );
  }
}

export default DonationLTL;
