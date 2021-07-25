import React from 'react';
import styled from "styled-components";

export const Paper = styled.div`
    background-color: white;
    background-size: contain;
    background-image:
        linear-gradient(to right, lightblue 1px, transparent 1px),
        linear-gradient(to bottom, lightblue 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 1;
    width: 350px;
    height: 300px;
    position: absolute;
    bottom: 5%;
    left: 5%;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    @media only screen and (max-width: 800px) {
        width: calc(100% - 50px);
        margin: auto;
        left: 0;
        right: 0;
        display: block;
        position: revert;
        text-align: center;
        height: auto;
        margin-bottom: 10px;
    }
`;

export const Text = styled.div`
    text-align: left;
    white-space: pre-line;
    font-family: Covered By Your Grace;
    font-size: 20px;
    padding: 5px;
    @media only screen and (max-width: 800px) {
        font-size: 20px;
    }
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    margin-left: 20px;
    color: black;
`;

export const Underline = styled.div`
    text-decoration: underline;
    cursor: pointer;
    font-family: Covered By Your Grace;
    font-size: 25px;
    margin-left: 20px;
    color: #041e42;
`;

const Circle = styled.div`
    border-radius: 50%;
    z-index: 30;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: red;
    background: radial-gradient(circle at 20px 20px, darkred, red);
    box-shadow: 2px 2px 5px rgba(33,33,33,.7);
    margin-left: 30%;
    margin-top: 5%;
    border: 1px solid darkred;
`;

export const GridPaper = ({showPopup}) => (
    <Paper>
        <Circle />
        <Text>
            Recycled plastic = reduced environmental impact!
        </Text>
        <Underline onClick={showPopup}>
            Learn more
        </Underline>
    </Paper>
);