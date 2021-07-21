import React from 'react';
import styled from 'styled-components';

import {CommonBackground, CommonModal} from '../popups/commonpopup';
import {FilterFilled, RightOutlined, PhoneFilled, ShoppingCartOutlined} from '@ant-design/icons';
import {PageFull} from './pagesstyledcomponents';

export const Phone = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 100px;
    transform: rotate(225deg);
    margin-bottom: -60px;
    margin-left: 2px;
`;

export const Icon = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 90px;
    transform: rotate(180deg);
`;

export const Cart = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 90px;
`;

export const Text = styled.div`
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 30px;
`;

export const Next = styled.div`
    text-align: right;
    height: auto;
    font-size: 30px;
    cursor: pointer;
    background-color: #041e42;
    border-radius: 4px;
    padding: 7px 22px;
    outline: none;
    width: fit-content;
    color: #ffffff;
`;

class Main extends React.Component {
    state={page: 1};

    componentDidMount() {
        
    }

    showModal = (n) => {
        this.setState({"page": n})
    }

    render() {
        return (
            <>
                <PageFull color={'#041e42'}>
                    {this.state.page === 1 && 
                        <>
                            <CommonBackground/>
                            <CommonModal>
                                <Text>This is a phone from 1937. Pretty outdated, right?</Text>
                                <Phone><PhoneFilled/></Phone>
                                <Icon><FilterFilled/></Icon>
                                <Next onClick={() => {return this.showModal(2)}}>Next <RightOutlined/></Next>
                            </CommonModal>
                        </>
                    }
                    {this.state.page === 2 && 
                        <>
                            <CommonBackground/>
                            <CommonModal>
                                <Text>This is also equipment from 1937. Probably time for an upgrade...</Text>
                                <Cart><ShoppingCartOutlined/></Cart>
                                <Next onClick={() => {window.location.pathname = '/home'}}>Next <RightOutlined/></Next>
                            </CommonModal>
                        </>
                    }
                </PageFull>
            </>
        )
    }
};

export default Main;
