import React, { Component } from 'react';
import Wrapper from '../Layout/Container';
import styled from 'styled-components';
import { Container, Row, Col, ListGroupItem } from 'react-bootstrap';

const ContentText = styled.div`
  text-align: center;
  .row{
    padding:2%;
    margin:1%;
  }
  .colLeft {
    padding: 2%;
    border-right: 1px solid orange;
  }
  .colRight {
    padding: 2%;
  }
  .Header{
    font-weight: bold;
    background: #262F40;
    color: white;
    padding: 2%;
    border-radius: 2px;
  }

  .Heading {
    text-align: center;
    color: #509dda;
    font-size: 18px;
    font-weight: bold;
  }
  .paragraph{
    font-size:14px;
    font-weight: bold;
    line-height: 20px;

  }

  .listItem{
    border: none;
    marin-top: 1%;

  }
`;

class Home extends Component {
  render() {
    const dataContent = (
      <ContentText>
        <Container>
          <h5 className="Header">Associate Training Material</h5>
          <Row className="row">
            <Col className='colLeft' md={6}>
              <h6 className='Heading'>Learning</h6>
              <hr />
              <p className='paragraph'>
                <strong>This app should be access inside Amazon LGA-9 building ONLY.</strong>
              </p>
              <p className='paragraph'>
                The reason behind creating this application is to make the process more
                simplified to understand for both the ambassador plus the 
                associates who will be trainned in the new process.
              </p>
              <div className='paragraph'>
                With the help of this <strong>"Demo Training"</strong>, we can

                <br/>
                  <ListGroupItem className="listItem">Quickly access all proccess.</ListGroupItem>
                  <ListGroupItem className="listItem">Never miss any step in the processing.</ListGroupItem>
                  <ListGroupItem className="listItem">Easy to read and understand.</ListGroupItem>
                  <ListGroupItem className="listItem"></ListGroupItem>

              </div>
            </Col>
            <Col className='colRight' md={6}>
              <h6 className='Heading'>About us</h6>
              <hr />
              <p className='paragraph'>
              I am Zeba, Ambassador of Amazon LGA-9, my motto behind creating this application 
                is to make these words alive <br/>
                <strong>"Work Hard,  Have Fun  and  Make History"</strong>.
              </p><p className='paragraph'>
              I have been with Amazon for more than 2 years now, Amazon is changing rapidly for its customers.
                It always comes up with new strategies, technologies to help their customers.
                Hence this is my attempt to go back home everyday without <strong>"Stress"</strong> but with
                 <strong> "Good memories"</strong> and time spend with my co-workers. 
                 </p><p className='paragraph'>
                   You will be able to see my work cum study progress update on this site eventually.
                   </p>
            
            </Col>
          </Row>
        </Container>
      </ContentText>
    );
    return <Wrapper Children={dataContent} />;
  }
}
export default Home;
