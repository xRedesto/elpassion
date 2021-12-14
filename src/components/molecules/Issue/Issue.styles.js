import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color:white;
    border-radius:4px;
    border: 1px solid #e0e0e0;
    padding:9px 12px;
    & + &{
        margin-top:5px;
    }
`
export const StyledTitle = styled.h3`
    font-weight: 500;
    font-size: 15px;
    margin:0;
`