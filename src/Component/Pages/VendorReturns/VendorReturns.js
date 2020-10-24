import React, { Component } from 'react';
import Wrapper from '../../Layout/Container';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import PacknHold from './PacknHold';
import LTLshipDepart from './LTLshipDepart';
import ProblemSolve from './ProblemSolve';
import RecycleLiquid from './RecycleLiquid';
import DonationLTL from './DonationLTL';
import WootBuffer from './WootBuffer';
import GradingOverage from './GradingOverage';
import ThingsToRem from './ThingToRem';

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
          <RecycleLiquid/>
          <DonationLTL/>
          <WootBuffer/>
          <PacknHold/>
          <ProblemSolve/>
          <LTLshipDepart/>
          <GradingOverage/>
          <ThingsToRem/>
        </Accordion>
      </ContentText>
    );
    return <Wrapper Children={dataContent} />;
  }
}

export default VendorReturns;
