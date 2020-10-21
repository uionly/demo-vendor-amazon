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
    text-align: center;
  }
  .SubHead {
    background: #509dda;
    padding: 2%;
  }
`;

class Ambassador extends Component {
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
               Pack Singles - Day 1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='cardBody'>
                <ListGroup className='listGrp'>
                  <div className='Note'>
                    <i>Login your Kindle and MIC</i>
                    <br />
                    <strong>Introduction :</strong> Introduce of yourself, let
                    the associate know who are you.
                    <br />
                    <i>
                      <strong>Also</strong> give them a tour of the working
                      area. Ex:- Restroom, lunch room and working depatment
                    </i>
                    <br/>
                    Pick your Module roaster for the day-1
                  </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Labor Track
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Add yourself first and then add all the associate you are
                    training.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    For Ambassador<strong> PACKAM</strong> then scan the login
                    ID of yourself
                  </ListGroup.Item>
                  <ListGroup.Item>
                    For Associate<strong> PAKTNG</strong> then scan the login ID
                    of all the associates
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      ATA
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Make sure to check the associate manager's name pop in the
                    screen is correct.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-3'>
                        3️⃣
                      </span>{' '}
                      Training
                    </strong>
                  </div>
                  <ListGroup.Item>
                    <strong>Start the basic training:</strong> Show them the
                    station, how to login, pull the tote down, boxes, etc.
                  </ListGroup.Item>
                  <div className='Note'>
                    <strong>Break</strong> <br />
                    Show them, How to punch in and out?
                  </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Labor Track
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Labor track one more time after coming from break, make sure
                    you do it before Associate login their station.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      Module
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Go over the JIB with the associate, make sure the associate
                    understand their job well.{' '}
                    <strong>Ask for Questions from them</strong>
                    <br />
                    After the module, complete and submit the{' '}
                    <strong>training transcript</strong>.
                    <br/>
                    <hr/>
                    <i>Day-1 Module have 4 modules to submit, do ask your manager for the damage module.</i>
                  </ListGroup.Item>
                  <div className='Note'>
                    <strong>Break</strong> <br />
                    <i>Reminder:</i>
                    <strong> NO</strong> PUNCH
                  </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Evaluation
                    </strong>
                  </div>
                  <ListGroup.Item>
                    This is the time to ask all the question in the evalutation
                    to the associate, let them answer the questions or
                    demostrate the answer to you. If the answer is correct mark
                    yes, if not correct mark it coached, explain them again the
                    proccess and then ask the question one more time. This time
                    the answer is correct mark yes, if not mark NO and submit
                    the evaluation.
                    <hr />
                    While giving the evaluation, mention all the point like the
                    weakness, strength or behavior in the report. This will help
                    the manager understand the associate well.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      ATA
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Remove the associate from the ATA before walking out of the
                    station.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-3'>
                        3️⃣
                      </span>{' '}
                      Learning Team
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Meet the Learning team and report any difficulty and success
                    for the day.
                  </ListGroup.Item>
                </ListGroup>
                <div className='Note'>
                  <i>Logout of Kindle and Make sure you sign for the MIC</i>
                  <br />
                  <strong>Day 1 - Finished</strong>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* Day 2 */}
          <Card>
            <Card.Header className='cardHeader'>
              <Accordion.Toggle
                className='togglebox'
                as={FormText}
                eventKey='1'
              >
               Pack Singles Day - 2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body className='cardBody'>
                <ListGroup className='listGrp'>
                  <div className='Note'>
                    <i>Login your Kindle and MIC</i>
                    <br />
                    Pick your Module roaster for the day-2
                    <hr/>
                    <strong>Welcome Back :</strong> Greet your associate, help them start up on their own.
                 </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Labor Track
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Add yourself first and then add all the associate you are
                    training.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    For Ambassador<strong> PACKAM</strong> then scan the login
                    ID of yourself
                  </ListGroup.Item>
                  <ListGroup.Item>
                    For Associate<strong> PAKTNG</strong> then scan the login ID
                    of all the associates
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      ATA
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Make sure to check the associate manager's name pop in the
                    screen is correct.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-3'>
                        3️⃣
                      </span>{' '}
                      Training
                    </strong>
                  </div>
                  <ListGroup.Item>
                    <strong>Ask Questions</strong> Let them do the work by themself, help them 
                    only if they ask you. Keep an eye on their work, suggest when required.
                  </ListGroup.Item>
                  <div className='Note'>
                    <strong>Break</strong> <br />
                    Remind them punch in and out?
                  </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Labor Track
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Labor track one more time after coming from break, make sure
                    you do it before Associate login their station.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      Module
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Go over the JIB with the associate, make sure the associate
                    understand their job well.{' '}
                    <strong>Encorage them to ask Questions</strong>
                    <br />
                    After the module, complete and submit the{' '}
                    <strong>training transcript</strong>.
                    <br/>
                    <hr/>
                    <i>Day-2 Module have 2 modules to submit.</i>
                  </ListGroup.Item>
                  <div className='Note'>
                    <strong>Break</strong> <br />
                    <i>Reminder:</i>
                    <strong> NO</strong> PUNCH
                  </div>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-1'>
                        1️⃣
                      </span>{' '}
                      Evaluation
                    </strong>
                  </div>
                  <ListGroup.Item>
                    This is the time to ask all the question in the evalutation
                    to the associate, let them answer the questions or
                    demostrate the answer to you. If the answer is correct mark
                    yes, if not correct mark it coached, explain them again the
                    proccess and then ask the question one more time. This time
                    the answer is correct mark yes, if not mark NO and submit
                    the evaluation.
                    <hr />
                    While giving the evaluation, mention all the point like the
                    weakness, strength or behavior in the report. This will help
                    the manager understand the associate well.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-2'>
                        2️⃣
                      </span>{' '}
                      ATA
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Remove the associate from the ATA before walking out of the
                    station.
                  </ListGroup.Item>
                  <div className='SubHead'>
                    <strong>
                      <span role='img' aria-label='number-3'>
                        3️⃣
                      </span>{' '}
                      Learning Team
                    </strong>
                  </div>
                  <ListGroup.Item>
                    Meet the Learning team and report any difficulty and success
                    for the day.
                  </ListGroup.Item>
                </ListGroup>
                <div className='Note'>
                  <i>Logout of Kindle and Make sure you sign for the MIC</i>
                  <br />
                  <strong>Day 2 - Finished</strong>
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
export default Ambassador;
