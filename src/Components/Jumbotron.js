import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import { device } from '../services/device';
import styled from 'styled-components';
import quoteTash from '../assets/quoteTash.jpg';

const Styles = styled.div`
  .jumbo {
    background: #002B36 url(${quoteTash}) no-repeat center;
    background-size: contain;
    margin-bottom: 0px;
    margin-top: 56px;
    @media ${device.sizeInbetween} {
      height: 180px;
  }
    @media ${device.tablet} {
      height: 180px;
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