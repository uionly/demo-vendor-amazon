import React, { Component } from 'react';
import Wrapper from '../Layout/Container';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const ContentText = styled.div`
  text-align: center;
  .row{
    padding:2%;
    margin:1%;
  }
  .colLeft {
    padding: 2%;
    text-align: left;
    border-right: 1px solid orange;
  }
  .colRight {
    padding: 2%;
    text-align: right;
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
              <p>
                The app is for the training process of the Associate inside the
                Amazon building only.
              </p>
            </Col>
            <Col className='colRight' md={6}>
              <h6 className='Heading'>About us</h6>
              <hr />
              <p>
                The app is for the training process of the Associate inside the
                Amazon building only.
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
