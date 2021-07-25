import React from 'react';
import styled from 'styled-components';

import NavTop from '../navbar/navtop';
import {WalmartApp} from '../connect/walmartapp';
import {PageFull} from './pagesstyledcomponents';
import NavigationBox from '../connect/navigationbox';

const Sign = styled.div`
    font-size: 40px;
    font-family: Roboto Condensed;
    text-align: center;
    color: black;
    display: block;
    margin-top: 100px;
    margin-left: 500px;
    right: 50px;
    position: absolute;
    width: 60%;
    background: repeating-linear-gradient(goldenrod, goldenrod 20%, #3b3b3b 20.1%, #3b3b3b 100%);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    height: 200px;
    padding: 10px;
    @media screen and (max-width: 1024px) {
        position: relative;
        top: revert;
        bottom: revert;
        display: block;
        margin: 0;
        margin-top: 100px;
        right: revert;
        width: calc(100% - 20px);
        overflow: hidden;
    }
    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    padding: 5px;
    color: white;
`;

export const Header = styled.div`
    display: flex;
    white-space: pre-line;
    font-size: 30px;
`;

class Connect extends React.Component {
    state={};

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <PageFull color={'#0071DC'}>
                    <NavTop />
                    <Sign>
                        <Header>Aisle B1</Header>
                        <Text>A redesigned shopping list. Save time, live better.</Text>
                    </Sign>
                    <WalmartApp />
                    <br />
                    <NavigationBox />
                </PageFull>
            </>
        )
    }
};

export default Connect;
