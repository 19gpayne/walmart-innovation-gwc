import React from 'react';

import NavTop from '../navbar/navtop';
import {StickyNoteLeft, StickyNoteRight} from '../design/stickynote';
import {PageFull} from './pagesstyledcomponents';

class Design extends React.Component {
    state={};

    componentDidMount() {
        
    }


    render() {
        return (
            <>
                <PageFull color={'#388484'}>
                    <NavTop />
                    <StickyNoteLeft color={'yellow'}/>
                    <StickyNoteRight color={'skyblue'} />
                </PageFull>
            </>
        )
    }
};

export default Design;
