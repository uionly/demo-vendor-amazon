import React, {  Component } from 'react';
import Wrapper from '../Layout/Container';


class Home extends Component {
  render() {
    const greeting = <h2 style={{textAlign:"center"}}>Coming soon Home Page</h2> 
    return <Wrapper Children={greeting} />;
  }
}
export default Home;