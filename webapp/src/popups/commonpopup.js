import styled from "styled-components";

export const CommonBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #041e42;
    @media screen and (max-width: 800px) {
        background-color: #fff;
    }
    z-index: 20;
`;

export const CommonModal = styled.div`
    margin: 0px auto;
    width: 748px;
    padding: 30px;
    border-radius: 6px;
    background-color: #fff;
    position: fixed;
    top: 100px;
    left: 0px;
    right: 0px;
    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 20px 0px;
        top: 0px;
        bottom: 0px;
        overflow-y: auto;
    }
    z-index: 21;
`;