import styled from '@emotion/styled';

export const Button = styled.button`
    margin: 0;
    padding: 10px;
    border: none;
    border-radius: 50%;
    color: white;
    font: inherit;
    background-color: lightgray;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 200ms linear;
    svg {fill:darkolivegreen;}
    :hover {
        color: lightgrey;
        background-color: darkolivegreen;
        transform: rotateZ(90deg);
        svg {fill:lightgrey;}
    }  
`;