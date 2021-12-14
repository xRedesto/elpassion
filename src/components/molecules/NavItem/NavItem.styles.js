import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    padding:18px;
    cursor: pointer;
    transition: background-color 300ms;
    &.-active, &:hover{
        background-color: #292a48;
    }
    svg{
        margin-right:10px;
    }
`

export const StyledTitle = styled.h3`
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight:400;
    margin:0;
`

export const StyledAmount = styled.p`
    margin:0;
    margin-left: auto;
    font-size: 14px;
    color: #8a8995;
`