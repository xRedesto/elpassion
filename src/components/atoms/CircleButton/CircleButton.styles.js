import styled from 'styled-components';

export const Circle = styled.div`
    width:10px;
    height:10px;
    background-color: ${({color})=> color || 'white'};
    border-radius: 50%;
    cursor: pointer;
`