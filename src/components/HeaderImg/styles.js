import styled from 'styled-components';

export const Img = styled.img`
    max-height: 50vh;
    margin-left: 50px;
    margin-top: 15vh;
    filter: drop-shadow(0 0 0.75rem ${(props) => (props.focus ? '#4c2c4cff' : '#1c2c4c')});
    transform: scale(
        ${(props) => (props.focus ? 1.05 : 1)}
    ) translateY(
        ${(props) => (props.focus ? '30px' : 0)}
    );
    transition: 1s;
`;

export const MovieImg1 = styled.img`
    width: 10vw;
    height: auto;
    position: absolute;

    transform: translate(10vw, 3vh) rotate(
        ${(props) => (props.focus ? '-10deg' : '100deg')}
    );
    transform-origin: 0% 100%;
    transition: 1s ease;
`;

export const MovieImg2 = styled.img`
    width: 10vw;
    height: auto;
    position: absolute;

    transform: translate(15vw, 3vh) rotate(
        ${(props) => (props.focus ? '10deg' : '-200deg')}
    );
    transform-origin: 100% 100%;
    transition: 1s ease;
`;

export const MovieImg3 = styled.img`
    width: 10vw;
    height: auto;
    position: absolute;

    transform: translate(25vw, 4vh) rotate(
        ${(props) => (props.focus ? '-15deg' : '100deg')}
    );
    transform-origin: 0% 100%;
    transition: 1s ease;
`;

export const MovieImg4 = styled.img`
    width: 10vw;
    height: auto;
    position: absolute;

    transform: translate(26vw, 4vh) rotate(
        ${(props) => (props.focus ? '40deg' : '-90deg')}
    );
    transform-origin: 100% 100%;
    transition: 1s ease;
`;
