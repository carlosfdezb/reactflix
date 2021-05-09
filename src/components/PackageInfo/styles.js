import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ListDiv = styled.div`
    width: 100vw;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 50px;
`;

export const Title = styled.h1`
    color: #1c2c4c;
    font-size: 3em;
    margin-bottom: 30px;
    cursor: default;
`;

export const SubTitle = styled.h1`
    margin-right: ${(props) => (props.fix ? '4vw' : '5vw')};
    color: #1c2c4c;
    cursor: default;
`;
