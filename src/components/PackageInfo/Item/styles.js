import styled from 'styled-components';

export const ItemDiv = styled.a`
    max-width: auto;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    text-decoration: none;
`;

export const Img = styled.img`
    height: ${(props) => (props.fix ? '40%' : '100%')};
    filter: grayscale(${(props) => (props.isFocus ? '0' : '100%')});
    transform: scale(${(props) => (props.isFocus ? '1.2' : '1')});
    transition: .5s;
    cursor: pointer;
`;

export const Title = styled.h1`
    transform: scale(${(props) => (props.isFocus ? '1.2' : '1')});
    color: ${(props) => (props.isFocus ? 'black' : 'grey')};
    font-size: 2.2em;
    transition: .5s;
    cursor: pointer;
    margin-bottom: 10px;
`;
