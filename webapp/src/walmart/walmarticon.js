import React from 'react';
import styled from "styled-components";

const Button = styled.div`
    position: fixed;
    top: auto;
    right: 40px;
    left: auto;
    bottom: 40px;
    border-radius: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: white;
    border: 0.5px solid #eeeeee;
    background-color: white;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 640px) {
        top: auto;
        right: 20px;
        left: auto;
        bottom: 20px;
    }
`;

export const WalmartIcon = () => (
    <Button onClick={() => {window.open('https://walmart.com', "_blank")}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/Walmart_Spark.svg' height="50" width="50" alt={"W"}/>
    </Button>
);