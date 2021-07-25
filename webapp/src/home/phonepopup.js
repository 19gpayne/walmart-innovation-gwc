import {CloseOutlined } from '@ant-design/icons';
import React from 'react';
import styled from "styled-components";
import {RightOutlined} from '@ant-design/icons';

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
    margin-left: 70%;
`;

export const Close = styled.div`
    text-align: right;
    width: 100%;
    height: auto;
    font-size: 20px;
    cursor: pointer;
`;

export const Next = styled.div`
    text-align: right;
    height: auto;
    font-size: 30px;
    cursor: pointer;
    background-color: #041e42;
    border-radius: 4px;
    padding: 2px 0px;
    outline: none;
    width: 100%;
    color: #ffffff;
`;

export const PhonePopup = ({close, next}) => (
    <>
            <Close onClick={close}><CloseOutlined/></Close>
            <Title>This is a phone from 1937</Title>
            <Body>
                Pretty outdated, right? We now have smart technology that makes our lives so much easier with
                the invention of mobile phones. 
            </Body>
            <Icon><img src='https://cdn.pixabay.com/photo/2017/07/06/00/44/phone-2476595_960_720.png' height="auto" width="30%" style={{textAlign: "center", display: 'flex'}} alt='Phone'/></Icon>
            <br />
            <Next onClick={next}><RightOutlined/>&nbsp;</Next>
    </>
);

export const CartPopup = ({close, next}) => (
    <>
            <Close onClick={close}><CloseOutlined/></Close>
            <Title>The shopping cart is also equipment from 1937</Title>
            <Body>
                It is probably time for an upgrade. Today's consumer value reduced effort, reduced time, quality, and organization <a href="https://hbr.org/2016/08/the-30-things-customers-really-value">according to Harvard Business Review</a>.
                Explore how the Walcart Connect can meet consumers' values, wants, and needs in 2021.
            </Body>
            <Icon><img src='https://cdn.pixabay.com/photo/2017/08/09/10/00/shopping-cart-2614015_960_720.png' height="auto" width="30%" style={{textAlign: "center", display: 'flex'}} alt='Phone'/></Icon>
            <br />
            <Next onClick={next}><RightOutlined/>&nbsp;</Next>
    </>
);
