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
    overflow: hidden;
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

export const Title = styled.div`
    font-size: 30px;
    font-family: Roboto Condensed;
    padding: 10px;
`;

export const Body = styled.div`
    font-size: 20px;
    font-family: Roboto Condensed;
    padding: 10px;
`;

export const Icon = styled.div`
    text-align: right;
    width: 100%;
    height: auto;
    font-size: 90px;
`;

export const Close = styled.div`
    text-align: right;
    width: 100%;
    height: auto;
    font-size: 20px;
    cursor: pointer;
`;