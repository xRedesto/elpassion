import styled from 'styled-components';
import backgroundImage from 'assets/images/background.jpg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position:center left calc(50% - 190px);
    display:flex;
    justify-content:center;
    align-items:center;
`