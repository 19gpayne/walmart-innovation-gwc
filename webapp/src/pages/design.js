import React from 'react';
import styled from 'styled-components';

import NavTop from '../navbar/navtop';
import {StickyNoteLeft, StickyNoteRight} from '../design/stickynote';
// import {PageFull} from './pagesstyledcomponents';
import {SketchPad} from '../design/sketch';
import {GridPaper} from '../design/gridpaper';
import { RecyclingPopup } from '../design/recyclingpopup';
import {MoreButton} from '../design/morebutton';
import { CartPopup } from '../design/cartpopup';

export const PageFull = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    top: 0;
    position: absolute;
    bottom: 0;
    background-size: 100%;
    @media screen and (max-width: 960px) {
        background-position: bottom;
        background-size: 150%;
        bottom: revert;
    }
    // background-color:#06c;
    background-image: linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
    background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
`;

export const Papers = styled.div`
    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: space-around;
        padding: 20px;
    }
`;

class Design extends React.Component {
    state={recyclingModalOpen: false, cartModalOpen: false};

    componentDidMount() {
        
    }

    setRecyclingModalOpen = () => {
        this.setState({'recyclingModalOpen': !this.state.recyclingModalOpen})
    }

    setCartModalOpen = () => {
        this.setState({'cartModalOpen': !this.state.cartModalOpen})
    }


    render() {
        return (
            <>
                <PageFull color={'#388484'}>
                    <NavTop />
                    <MoreButton showPopup={this.setCartModalOpen}/>
                    <SketchPad />
                    <Papers>
                        <StickyNoteLeft color={'lightpink'}/>
                        <StickyNoteRight color={'skyblue'} />
                    </Papers>
                    <GridPaper showPopup={this.setRecyclingModalOpen}/>

                    {this.state.recyclingModalOpen &&
                        <RecyclingPopup close={this.setRecyclingModalOpen}/>
                    }

                    {this.state.cartModalOpen &&
                        <CartPopup close={this.setCartModalOpen}/>
                    }
                </PageFull>
            </>
        )
    }
};

export default Design;
