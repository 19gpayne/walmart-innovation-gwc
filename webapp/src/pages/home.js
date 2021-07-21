import React from 'react';

import NavTop from '../navbar/navtop';
import {WelcomeSign} from '../home/welcomesign';
import {PageFull} from './pagesstyledcomponents';

class Home extends React.Component {
    state={};

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <PageFull color={'#ffffff'}>
                    <NavTop />
                    <WelcomeSign />
                </PageFull>
            </>
        )
    }
};

export default Home;
