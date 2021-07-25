import React from 'react';
import styled, {keyframes} from "styled-components";

const expand = keyframes`
  from {
    transform: scale(1, 0.01);
  }
  to {
    transform: scale(1, 1);
  }
`;

const Sign = styled.div`
    background: #0071DC;
    z-index: 4;
    width: 100%;
    height: 150px;
    text-align: center;
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform-origin: 0% 0%;
    font-family: Roboto Condensed;
    font-size: 40px;
    @media only screen and (max-width: 800px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 640px) {
      font-size: 20px;
    }
`;

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    padding: 5px;
    color: white;
`;

const Header = styled.div`
    display: flex;
    white-space: pre-line;
    font-size: 30px;
    visibility: hidden;
`;

export const WelcomeSign = () => (
    <Sign>
        <Header>.</Header>
        <Text>Introducing Walmart's newest design... the Walcart Connect!</Text>
    </Sign>
);