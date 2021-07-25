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

export const Sign = styled.div`
    padding: 10px;
    background: repeating-linear-gradient(goldenrod, goldenrod 20%, #3b3b3b 20.1%, #3b3b3b 100%);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    width: calc(100% - 400px);
    height: 200px;
    text-align: center;
    margin: 0px 200px;
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform-origin: 0% 0%;
    margin-top: 100px;
    font-family: Roboto Condensed;
    font-size: 40px;
    @media only screen and (max-width: 800px) {
      width: calc(100% - 50px);
      margin: auto;
      margin-top: 100px;
      font-size: 30px;
    }
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    padding: 5px;
    color: white;
`;

export const Header = styled.div`
    display: flex;
    white-space: pre-line;
    font-size: 30px;
`;

export const WelcomeSign = () => (
    <Sign>
        <Header>Aisle A3</Header>
        <Text>Introducing Walmart's newest design... the Walcart Connect!</Text>
    </Sign>
);