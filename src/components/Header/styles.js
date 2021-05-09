import styled, { css } from 'styled-components';

export const HeaderDiv = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
`;

export const Subtitle = styled.h1`
    max-width: 30vw;
    font-size: 1.5em;
    cursor: default;
`;

export const InfoDiv = styled.div`
    margin-top: 20vh;
    width: 30vw;
`;

export const ParticlesDiv = styled.div`
    position: absolute;
    top: 0;
`;

export const GitDiv = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 15px;
    margin-right: 30px;
    cursor: pointer;
    z-index: 99999;
    color: white;
    &:hover {
        filter: drop-shadow(0 0 0.15rem white); 
        transition: .5s;    
    }
`;

export const Body = styled.div`
    margin-top: -20vh;
    
`;
