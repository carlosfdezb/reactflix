import styled from 'styled-components';

export const BaseDiv = styled.a`
    margin-top: 40px;
    height: 70px;
    width: 75%;
    background-color: white;
    border-radius: 35px;
    -webkit-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    -moz-box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    box-shadow: 0px -1px 19px -5px rgba(255,255,255,1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1c2c4c;
    text-decoration: none;

    transform: scale(
        ${(props) => (props.isZoom ? 1.05 : 1)}
    );
    transition: 1s;
`;
