import styled from "styled-components";

export const NavTop = styled.div`
    top: 0px;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #041e42;
    padding: 20px 0px;
    z-index: 2;
    text-align: center;
    font-family: Roboto Condensed;
`;

export const DesktopIcon = styled.div`
    color: white;
    cursor: pointer;
    & :hover {
        text-decoration: underline;
    }
    font-size: 50px;
    text-align: center;
`;

export const NavButton = styled.div`
    padding: 5px 20px;
    display: inline-flex;
`;

export const Label = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
        text-decoration: underline;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding: 5px 0px;
    cursor: pointer;
    & :hover {
        text-decoration: underline;
    }
    text-align: center;
    font-size: 20px;
    display: inline;
    width: fit-content;
`;