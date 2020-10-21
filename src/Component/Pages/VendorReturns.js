import React, { Component } from 'react';
import Wrapper from '../Layout/Container';
import styled from 'styled-components';
import { Accordion, Card, FormText, ListGroup } from 'react-bootstrap';

const ContentText = styled.div`
  margin: 2%;
  text-align: center;
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

class VendorReturns extends Component {
  render() {
    const dataContent = (
      <ContentText>
        <Accordion>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='0'
              >
                Recycle
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='cardBody'>
                {' '}
                FC Menu{' '}
                <span role='img' aria-label='arrow'>
                  ➡️
                </span>{' '}
                Outbond  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Pack App Removals  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Destroys
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='1'
              >
                Liquidations
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body className='cardBody'>
                {' '}
                FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> More Choices  <span role='img' aria-label='arrow'>
                  ➡️
                </span> PNP Web App
              </Card.Body>
            </Accordion.Collapse>
          </Card>
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
                FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Outbond  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Pack App Removals  <span role='img' aria-label='arrow'>
                  ➡️
                </span> LTL Liquidations And
                Vendor Returns
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
                FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> More Choices  <span role='img' aria-label='arrow'>
                  ➡️
                </span> PNP Web App
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='4'
              >
                Pack and Hold
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>
                <div className='Note'>
                  PNH is <strong>Resellable</strong>, so make sure everything is
                  in good condition when moving it to gaylord.
                </div>
                <div className='SubHead'>
                  PNH is process of <span role='img' aria-label='number-3'>
                  3️⃣
                </span> steps mention below, make sure you
                  complete each individually.
                </div>
                <ListGroup className='listGrp'>
                  <ListGroup.Item>
                  <span role='img' aria-label='number-1'>
                  1️⃣
                </span> <strong>Verify The Content</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <span role='img' aria-label='number-2'>
                  2️⃣
                </span> <strong>Frost</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <span role='img' aria-label='number-3'>
                  3️⃣
                </span> <strong>Bulk Pack</strong>
                  </ListGroup.Item>
                </ListGroup>
                <hr />
                <div className='headDiv'>
                  <div className='subDiv'>
                  <span role='img' aria-label='number-1'>
                  1️⃣
                </span> <strong>Verify The Content</strong>
                  </div>
                  <Card.Body>
                    FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> WHD List Tote  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Scan Tote
                  </Card.Body>
                  <div>
                    {' '}
                    <strong>
                      The Above process will let you sort the totes. Example:
                      Donation, Liquidator, Warehouse Deals, Sellable, etc.
                    </strong>
                  </div>
                </div>
                <div className='headDiv'>
                  <div className='subDiv'>
                  <span role='img' aria-label='number-2'>
                  2️⃣
                </span> <strong>FROST</strong>
                  </div>
                  <Card.Body>
                    FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Reverse Logistics  <span role='img' aria-label='arrow'>
                  ➡️
                </span> FROST  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Pack and Hold  <span role='img' aria-label='arrow'>
                  ➡️
                </span>
                    Scan Tote/Container{' '}
                  </Card.Body>
                  <div>
                    {' '}
                    <strong>
                      The Above process will make the tote ready for bulk pack.
                    </strong>
                  </div>
                </div>
                <div className='headDiv'>
                  <div className='subDiv'>
                  <span role='img' aria-label='number-3'>
                  3️⃣
                </span> <strong>Bulk Pack</strong>
                  </div>
                  <Card.Body>FC Menu  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Outbond  <span role='img' aria-label='arrow'>
                  ➡️
                </span> Bulk Pack</Card.Body>
                  <div>
                    <strong>Station ID </strong>can be of any name, Ex: PNH or
                    your own NAME INITIALS. In Bulk Pack we need some to hold
                    the tote items
                  </div>
                  <br />
                  <div>
                    {' '}
                    <strong>
                      Scan the tote/container ID, when its ready  <span role='img' aria-label='arrow'>
                  ➡️
                </span> then scan the
                      spoo to finish the process.
                    </strong>
                  </div>
                </div>
                <div className='Note'>
                  <strong>Important</strong>
                </div>
                <div className='SubHead'>
                  For <strong>DONATION</strong> from PNH after the <span role='img' aria-label='number-1'>
                  1️⃣
                </span> <span role='img' aria-label='number-2'>
                  2️⃣
                </span> <span role='img' aria-label='number-3'>
                  3️⃣
                </span>
                   process the tote items has to be dump in regular gaylord.
                  <br />
                  <hr />
                  For <strong>Liquidator</strong> from PNH after the <span role='img' aria-label='number-1'>
                  1️⃣
                </span> <span role='img' aria-label='number-2'>
                  2️⃣
                </span>
                <span role='img' aria-label='number-3'>
                  3️⃣
                </span> process we have to complete another process of <span role='img' aria-label='number-4'>
                4️⃣
                </span>
                </div>
                <ListGroup className='listGrp'>
                  <ListGroup.Item>
                  <span role='img' aria-label='number-4'>
                4️⃣
                </span> <strong>Palletize in PNH Gaylord</strong>
                  </ListGroup.Item>
                </ListGroup>
                <div className='headDiv'>
                  Scan the spoo from process <span role='img' aria-label='number-3'>
                  3️⃣
                </span> then scan the pallet open and
                  add in the gaylord.
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
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
    );
    return <Wrapper Children={dataContent} />;
  }
}

export default VendorReturns;
