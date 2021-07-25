import React from 'react';
import styled from 'styled-components';

import NavTop from '../navbar/navtop';
import {WelcomeSign} from '../home/welcomesign';
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
    text-align: center;
    height: auto;
    font-size: 30px;
    cursor: pointer;
    background-color: #041e42;
    border-radius: 4px;
    padding: 7px 0px;
    outline: none;
    width: 100%;
    color: #ffffff;
`;

class Home extends React.Component {
    state={};

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <PageFull color={'#0071DC'} style={{backgroundImage: 'url("https://res.cloudinary.com/dou0q4ekk/image/upload/v1626970325/IMG_5179_alhgoy.jpg")', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                {/* <PageFull color={'#0071DC'} > */}
                    <NavTop />
                    <WelcomeSign />
                    {/* <img src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627091230/Removal-653_rasnpi.png' width={'100%'} height={'65%'} style={{objectFit: 'cover', objectPosition: 'left center', position: 'absolute', left: '0%', top: '45%'}}/> */}
                </PageFull>
            </>
        )
    }
};

export default Home;
