import React, {  Component } from 'react';
import Wrapper from '../Layout/Container';
import styled from 'styled-components';
import {Accordion, Card, FormText, ListGroup } from 'react-bootstrap';

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
.listGrp{
    text-align: left;
    border-radius: 0;
}
.Note{
    background:orange;
    padding:2%;
}
.SubHead{
    background: #509dda;
    padding:2%;

}
.headDiv{
    padding:2%;
    margin:1;
    border: 1px solid #262F40;
    text-align: left;
}
.subDiv{
    background: orange;
    
}

`

class VendorReturns extends Component {
  render() {
    const greeting = <ContentText >
       <Accordion>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText}  eventKey="0" >
        Recycle
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="cardBody"> FC Menu ➡️ Outbond ➡️ Pack App Removals ➡️Destroys</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText} eventKey="1">
       LTL
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
    <Card.Body> FC Menu ➡️ Outbond ➡️ Pack App Removals ➡️ LTL Liquidations And Vendor Returns</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText} eventKey="2">
       Donation
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
    <Card.Body> FC Menu ➡️ Reverse Logistics ➡️ More Choices ➡️ PNP Web App</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText} eventKey="3">
       Pack and Hold
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
    <Card.Body>
        <div className="Note">PNH is <strong>Resellable</strong>, so make sure everything is in good condition when moving it to gaylord.</div>
        <div className="SubHead">PNH is process of 3 steps mention below, make sure you complete each individually.</div>
        <ListGroup className="listGrp">
            <ListGroup.Item>1️⃣ <strong>Verify The Content</strong></ListGroup.Item>
            <ListGroup.Item>2️⃣ <strong>Frost</strong></ListGroup.Item>
            <ListGroup.Item>3️⃣ <strong>Bulk Pack</strong></ListGroup.Item>
        </ListGroup>
        <hr/>
        <div className="headDiv">
        <div className="subDiv">1️⃣ <strong>Verify The Content</strong></div>
        <Card.Body>FC Menu ➡️ Reverse Logistics ➡️ WHD List Tote ➡️ Scan Tote</Card.Body>
        <div> <strong>The Above process will let you sort the totes. Example: Donation, Liquidator, Warehouse Deals, Sellable, etc.</strong></div>
        </div>
        <div className="headDiv">
        <div className="subDiv">2️⃣ <strong>FROST</strong></div>
        <Card.Body>FC Menu ➡️ Reverse Logistics ➡️ FROST ➡️ Pack and Hold ➡️ Scan Tote/Container </Card.Body>
        <div> <strong>The Above process will make the tote ready for bulk pack.</strong></div>
        </div>
        <div className="headDiv">
        <div className="subDiv">3️⃣ <strong>Bulk Pack</strong></div>
        <Card.Body>FC Menu ➡️ Outbond ➡️ Bulk Pack</Card.Body>
        <div><strong>Station ID </strong>can be of any name, Ex: PNH or your own NAME INITIALS. In Bulk Pack we need some to hold the tote items</div>
        <br/>
        <div> <strong>Scan the tote/container ID, when its ready ➡️then scan the spoo to finish the process.</strong></div>
        </div>
        <div className="Note"><strong>Important</strong></div>
        <div className="SubHead">For <strong>DONATION</strong> from PNH after the 1️⃣ 2️⃣ 3️⃣ process the tote items has to be dump in regular gaylord.
        <br/>
        <hr/>
        For <strong>Liquidator</strong> from PNH after the 1️⃣ 2️⃣ 3️⃣process we have to complete another process of 4️⃣</div>
        <ListGroup className="listGrp">
            <ListGroup.Item>4️⃣ <strong>Palletize in PNH Gaylord</strong></ListGroup.Item>
        </ListGroup>
        <div className="headDiv">Scan the spoo from process 3️⃣ then scan the pallet open and add in the gaylord.</div>
         </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header className="cardHeader">
      <Accordion.Toggle className='togglebox' as={FormText}  eventKey="4" >
        Label Printing and Rodio
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
// const Greeting = props => <h1>{props.greeting}</h1>

export default VendorReturns;