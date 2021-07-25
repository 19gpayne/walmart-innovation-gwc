import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import {CommonBackground, CommonModal, Title, Body, Close, Icon} from '../popups/commonpopup';

export const CartPopup = ({close}) => (
    <>
        <CommonBackground/>
        <CommonModal>
            <Close onClick={close}><CloseOutlined/></Close>
            <Title>Walcart Features</Title>
            <Body>
                The Walcart aims to upgrade the traditional shopping cart with several enhancements.
                <br />
                <br/>
                <ul>
                    <li>
                        Pushless design - with smart technology, the shopping cart is able to follow
                        navigation based on the shopper's connected shopping list, as well as follow voice
                        controls. 
                    </li>
                    <li>
                        Embedded screen - allows shoppers to connect their Walmart shopping list to easily
                        navigate the store and locate items. The screen also rotates to allow children
                        in the cart to access several basic games and pass the time.
                    </li>
                    <li>
                        Other enhancements - improved tires for longevity (plus no more wobbly, squeaky wheels)
                        and hooks to hold bags open and easily put in items after being scanned (works great with Mobile
                        Scan & Go!)
                    </li>
                </ul>
            </Body>
            <Icon><ShoppingCartOutlined/></Icon>
        </CommonModal>
    </>
);
