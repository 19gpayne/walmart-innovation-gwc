import React from 'react';
import styled from 'styled-components';
import {CommonBackground, CommonModal} from '../popups/commonpopup';

import NavTop from '../navbar/navtop';
import {WelcomeSign} from '../home/welcomesign';
import {PageFull} from './pagesstyledcomponents';
import {PhonePopup, CartPopup} from '../home/phonepopup';

const SideBar = styled.div`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    right: 0px;
    top: 50%;
    border-radius: 4px;
    z-index: 30;
    height: fit-content;
    min-height: 120px;
    background-color: white;
    transform: rotate(180deg);
    padding: 10px;
    text-align: center;
    border-top: 2px solid navy;
    border-bottom: 2px solid navy;
    border-right: 2px solid navy;
    font-family: Roboto Condensed;
    cursor: pointer;
    font-size: 20px;
    overflow: hidden;
    color: navy;
`;

const CartImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 100%;
`;

const Border = styled.div`
    border-radius: 5px;
    border: 1px solid gray;
    height: 70%;
    width: 70%;
    margin: auto;
    margin-top: 20px;
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
                <PageFull color='#b5dbff'>
                    <NavTop />
                    <WelcomeSign />
                    <Border>
                        <CartImage src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627245514/IMG_5177_1_zfngzd.jpg' width='50%'/>
                    </Border>
                    <SideBar onClick={() => {return this.showModal(2)}}>
                        More Info
                    </SideBar>
                </PageFull>
                {this.state.page !== 1 && 
                    <>
                        <CommonBackground/>
                        <CommonModal>
                            {this.state.page === 2 && 
                                    <>
                                        <PhonePopup close={() => {return this.showModal(1)}} next={() => {return this.showModal(3)}}/>
                                    </>
                                }
                            {this.state.page === 3 && 
                                <>
                                    <CartPopup close={() => {return this.showModal(1)}} next={() => {return this.showModal(1)}}/>
                                </>
                            }
                        </CommonModal>
                    </>
                }
            </>
        )
    }
};

export default Home;
