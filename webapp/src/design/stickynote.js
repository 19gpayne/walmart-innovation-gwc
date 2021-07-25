import React from 'react';
import styled from "styled-components";

export const NoteLeft = styled.div`
    padding: 10px;
    background-color: ${props => props.color};
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    transform: rotate(4deg);
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50px;
    top: 100px;
    @media only screen and (max-width: 800px) {
        position: revert;
        left: revert;
        right: revert;
        display: inline-flex;
    }
`;

export const NoteRight = styled.div`
    padding: 10px;
    background-color: ${props => props.color};
    box-shadow: -5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    transform: rotate(-3deg);
    width: 200px;
    height: 200px;
    position: absolute;
    right: 50px;
    top: 475px;
    @media only screen and (max-width: 800px) {
        position: revert;
        left: revert;
        right: revert;
        display: inline-flex;
    }
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    font-family: Covered By Your Grace;
    font-size: 20px;
    padding: 5px;
    @media only screen and (max-width: 800px) {
        font-size: 15px;
    }
`;

export const StickyNoteLeft = ({color}) => (
    <NoteLeft color={color}>
        <Text>
            Embedded screen allows for easy shopping navigation,
            with ability to connect shopping list from walmart.com
            <br/>
            + games for kids :)
        </Text>
    </NoteLeft>
);

export const StickyNoteRight = ({color}) => (
    <NoteRight color={color}>
        <Text>
            Pushless shopping cart design with self-driving and navigation
            based on shopping list
        </Text>
    </NoteRight>
);