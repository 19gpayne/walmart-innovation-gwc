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

export const NoteLeft = styled.div`
    padding: 10px;
    background: repeating-linear-gradient(goldenrod, goldenrod 20%, #3b3b3b 20.1%, #3b3b3b 100%);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    width: calc(100% - 400px);
    height: 200px;
    text-align: center;
    margin: 0px 200px;
    border: 1px solid black;
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform-origin: 0% 0%;
    margin-top: 100px;
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    font-size: 20px;
    padding: 5px;
`;

export const WelcomeSign = () => (
    <NoteLeft>
        <Text>Introducing Walmart's newest design... the Walcart!</Text>
    </NoteLeft>
);