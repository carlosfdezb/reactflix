import styled from 'styled-components';
import { slideDesktop, slideOutDesktop } from '../../styles/animation';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    margin-bottom: 10vh;
    animation: ${(props) => (props.select ? slideDesktop : slideOutDesktop)} 1.5s ease;
`;

export const Title = styled.h1`
    color: #1c2c4c;
    font-size: 3em;
    margin-bottom: 30px;
    cursor: default;
    text-align: center;
    margin-top: 5vh;
    width: 100vw;
    padding-left: 20vw;
    padding-right: 20vw;
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: #6a1c4a;
    cursor: pointer;
`;

export const H1 = styled.h1`
    color: #1c2c4c;
    font-size: 4em;
    margin-bottom: 30px;
    cursor: default;
    text-align: center;
    margin-top: 5vh;
    max-width: 80%;
    font-weight: bold;
`;

export const H2 = styled.h2`
    color: #4c2c4c;
    margin-bottom: 30px;
    cursor: default;
    text-align: center;
    max-width: 80%;
`;

export const Desktop = styled.img`
    width: 50vw;
    height: auto;
    position: absolute;
    left: 0;
    margin-left: 3vw;
`;

export const Mobile = styled.img`
    width: 17vw;
    height: auto;
    position: absolute;
    left: 0;
    margin-left: 36vw;
`;

export const Button = styled.div`
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: #4c2c4c;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.div`
    width: 35%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
