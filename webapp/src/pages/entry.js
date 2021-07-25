import React from 'react';
import styled from 'styled-components';
import {CommonBackground, CommonModal} from '../popups/commonpopup';

import NavTop from '../navbar/navtop';
import {WelcomeSign} from '../home/welcomesign';
import {PageFull} from './pagesstyledcomponents';
import {RightOutlined} from '@ant-design/icons';

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
    padding: 7px 0px;
    outline: none;
    width: 100%;
    color: #ffffff;
    font-family: Roboto Condensed;
`;

const Title = styled.div`
    font-size: 30px;
    font-family: Roboto Condensed;
    padding: 10px;
`;

class Home extends React.Component {
    state={page: 1};

    componentDidMount() {
        
    }

    showModal = (n) => {
        this.setState({"page": n})
    }

    render() {
        return (
            <>
                <PageFull color={'#0071DC'} >
                    <NavTop />
                    {this.state.page !== 3 && 
                        <>
                            <CommonBackground/>
                            <CommonModal>
                                {this.state.page === 1 && 
                                        <>
                                            <Title>This is a phone from 1937. Pretty outdated, right?</Title>
                                            <br />
                                            <img src='https://cdn.pixabay.com/photo/2017/07/06/00/44/phone-2476595_960_720.png' height="auto" width="100%" style={{textAlign: "center"}} alt='Phone'/>
                                            <br />
                                            <Next onClick={() => {return this.showModal(2)}}><RightOutlined/>&nbsp;</Next>
                                        </>
                                    }
                                {this.state.page === 2 && 
                                    <>
                                        <Title>This is also equipment from 1937. Probably time for an upgrade...</Title>
                                        <br />
                                        <img src='https://cdn.pixabay.com/photo/2018/02/14/23/38/shopping-cart-3154149_960_720.jpg' height="auto" width="70%" style={{textAlign: "center", marginRight: 'auto', marginLeft: 'auto', display: 'block'}} alt='Cart'/>
                                        <br />
                                        <Next onClick={() => {return this.showModal(3)}}><RightOutlined/>&nbsp;</Next>
                                    </>
                                }
                            </CommonModal>
                        </>
                    }
                    {this.state.page === 3 && 
                        <>
                            <WelcomeSign />
                            <img src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627091230/Removal-653_rasnpi.png' width={'100%'} height={'60%'} style={{objectFit: 'cover', objectPosition: 'left center', position: 'absolute', left: '0%', top: '40%'}} alt='Cart'/>
                        </>
                    }
                </PageFull>
            </>
        )
    }
};

export default Home;
