import React from 'react';
import styled from "styled-components";

export const Paper = styled.img`
    background-color: white;
    width: 50%;
    position: absolute;
    left: 25%;
    top: 20%;
    z-index: 30;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    @media only screen and (max-width: 800px) {
        width: calc(100% - 50px);
        margin: auto;
        left: revert;
        right: revert;
        position: revert;
        display: block;
      }
    border: 5px solid black;
    border-top: 20px solid black;
    box-shadow: -5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(-1deg);
`;

export const SketchPad = () => (
    <Paper src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1626974868/IMG_5210_npl3wn.jpg' width={'100%'}/>
);