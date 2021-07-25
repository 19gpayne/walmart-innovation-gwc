import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import styled from "styled-components";

export const Button = styled.div`
    text-align: center;
    font-size: 25px;
    background-color: #fced86;
    background-size: contain;
    background-image:
        linear-gradient(to right, transparent 1px, transparent 1px),
        linear-gradient(to bottom, gray 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 30px 10px;
    outline: none;
    width: 20%;
    color: black;
    margin-top: 60px;
    font-family: Roboto Condensed;
    margin-left: 80%;
    box-shadow: -5px 5px 7px rgba(33,33,33,.7);
    transform: rotate(4deg);
    text-decoration: underline;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
        margin-top: 80px;
        margin-left: 10px;
        padding: 5px;
        transform: rotate(0deg);
        box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    }
    
`;

export const Pen = styled.div`
    width: 30%;
    margin-top: 100px;
    margin-left: 80%;
    transform: rotate(45deg);
    overflow: hidden;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Text = styled.div`
    cursor: pointer;
`;

export const OverFlow = styled.div`
    overflow: hidden;
    @media screen and (max-width: 800px) {
        left: revert;
        right: revert;
        position: revert;
        display: inline-flex;
        width: fit-content;
    }
`;

export const MoreButton = ({showPopup}) => (
    <OverFlow>
        <Button onClick={showPopup}>
            <br />
            <Text>
                View Details 
                <br />
                <SearchOutlined />
            </Text>
        </Button>
        <Pen>
            <img src='https://cdn.pixabay.com/photo/2012/04/13/18/44/pen-33237_960_720.png' width={'80%'}/>
        </Pen>
    </OverFlow>
);