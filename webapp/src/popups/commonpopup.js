import styled from "styled-components";

export const CommonBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.30);
    z-index: 50;
`;

export const CommonModal = styled.div`
    margin: 0px auto;
    width: 748px;
    padding: 30px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    top: 100px;
    left: 0px;
    right: 0px;
    @media screen and (max-width: 800px) {
        top: 50px;
        width: 80%;
        padding: 20px;
        overflow: auto;
    }
    z-index: 51;
`;