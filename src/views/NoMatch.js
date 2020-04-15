import React, { Component } from 'react';
import { StyledLink, MarginH1, StyledDiv } from "../views/Styles"

class NoMatch extends Component {
  render() {
    return (
      <>
        <MarginH1>Oh no!</MarginH1>
        <StyledDiv>Page not found! Let <StyledLink href="mailto:mail@tash-tenner.com?subject=Hi" title="Mail" rel="noopener noreferrer">me</StyledLink> know about it, thanks. <span role="img" aria-label="grinning">😀</span></StyledDiv>
      </>
    );
  }
}

export default NoMatch;