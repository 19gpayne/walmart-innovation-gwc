import React from 'react';
import styled from "styled-components";

export const Phone = styled.img`
    background-color: white;
    margin-top: -90px;
    height: calc(100% - 60px);
    width: auto;
    position: absolute;
    left: 0;
    top: 20%;
    z-index: 0;
    @media screen and (max-width: 1024px) {
        margin-top: revert;
        width: 100%;
        height: auto;
        position: revert;
        left: revert;
        top: revert;
        z-index: 0;
        margin: auto;
        margin-top: 10px;
    }
`;

export const WalmartApp = () => (
    <Phone src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627076297/Screen_Shot_2021-07-23_at_5.37.41_PM_qoxqyz.png' width={'100%'}/>
);