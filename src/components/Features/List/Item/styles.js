import styled from 'styled-components';

export const ItemDiv = styled.div`
    width: 20vw;
    height: 300px;
    color: black;
    padding: 30px;
    border-radius: 20px;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
            -20px -20px 60px #ffffff;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${(props) => (props.isFocus ? '5px solid #4c2c4c' : '')};
`;

export const Title = styled.h1`
    color: #1c2c4c;
    cursor: default;
    text-align: center;
`;
