import styled from 'styled-components';

export const PageFull = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    top: 0;
    position: absolute;
    bottom: 0;
    background-size: 100%;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
        background-position: bottom;
        background-size: 150%;
        overflow: revert;
    }
`;