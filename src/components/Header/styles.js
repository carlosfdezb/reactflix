import styled, { css } from 'styled-components';

export const HeaderDiv = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    top: 0;
`;

export const Subtitle = styled.h1`
    max-width: 30vw;
    font-size: 1.5em;
`;

export const InfoDiv = styled.div`
    margin-top: 30vh;
    width: 30vw;
`;

export const Img = styled.img`
    max-height: 50vh;
    margin-left: 50px;
    margin-top: 15vh;
    filter: drop-shadow(0 0 0.75rem #1c2c4c);
`;

export const ParticlesDiv = styled.div`
    position: absolute;
    top: 0;
`;
