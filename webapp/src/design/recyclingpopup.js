import { BulbOutlined, CloseOutlined, SyncOutlined } from '@ant-design/icons';
import React from 'react';
import {CommonBackground, CommonModal} from '../popups/commonpopup';
import styled from "styled-components";

const Title = styled.div`
    font-size: 30px;
    font-family: Roboto Condensed;
    padding: 10px;
`;

const Body = styled.div`
    font-size: 20px;
    font-family: Roboto Condensed;
    padding: 10px;
`;

export const Icon = styled.div`
    text-align: right;
    width: 100%;
    height: auto;
    font-size: 90px;
`;

export const Close = styled.div`
    text-align: right;
    width: 100%;
    height: auto;
    font-size: 20px;
    cursor: pointer;
`;

export const RecyclingPopup = ({close}) => (
    <>
        <CommonBackground/>
        <CommonModal>
            <Close onClick={close}><CloseOutlined/></Close>
            <Title>Why Using Recycled Plastic Matters <SyncOutlined/></Title>
            <Body>
                Plastic pollution causes harm to all living creatures -
                people, animals, and plants. It takes hundreds of years to breakdown, so reusing it
                can help keep plastic out of landfills. Using recycled plastic not only keeps plastic out of landfills, 
                but it is cost-efficient too. It reduces energy consumption by 66% and saves over 1,000 gallons of oil.
            </Body>
            <Icon><BulbOutlined/></Icon>
        </CommonModal>
    </>
);
