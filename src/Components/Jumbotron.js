import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import { device } from '../services/device';
import styled from 'styled-components';
import quoteTash from '../assets/quoteTash.jpg';

const Styles = styled.div`
  .jumbo {
    background: #002B36 url(${quoteTash}) no-repeat bottom;
    background-size: contain;
    height: 140px;
    @media ${device.mobileM} {
      height: 160px;
  }
    @media ${device.mobileL} {
      background-position: center;
      height: 245px;
  }
    @media ${device.sizeInbetween} {
      background-position: center;
      background-size: 600px;
      height: 245px;
  }
    @media ${device.tablet} {
      height: 245px;
  }
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
    </Jumbo>
  </Styles>
)