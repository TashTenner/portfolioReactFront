import React, { Component } from 'react';
import TextLoop from "react-text-loop";

class Home extends Component {
  render() {
    return (
      <>
        <p>Full Stack Developer</p>
        <p>- From Linguistics to Web Development -</p>
        <p>Multilingual German native based in Barcelona</p>
        <div>
          <div>Hello! I am Tash,</div>
          <div>
            <TextLoop interval={600} springConfig={{ stiffness: 180, damping: 8 }}>
              <div>#Linguist</div>
              <div>#Web Developer</div>
              <div>#Traveller</div>
              <div>#Tango dancer</div>
              <div>#Cat lover</div>
            </TextLoop>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

// ©2019 Tash Tenner
// mailto:tashfonetikas@gmail.com?subject=Hi from Website
