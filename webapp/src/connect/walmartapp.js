import React from 'react';
import styled from "styled-components";

export const Phone = styled.img`
    background-color: white;
    margin-top: 100px;
    height: auto;
    width: 30%;
    position: absolute;
    top: -4%;
    left: 0;
    z-index: 0;
    height: 92%;
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