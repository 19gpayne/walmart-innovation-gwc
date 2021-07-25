import { BulbOutlined, CloseOutlined, SyncOutlined } from '@ant-design/icons';
import React from 'react';
import {CommonBackground, CommonModal, Title, Body, Close, Icon} from '../popups/commonpopup';



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
