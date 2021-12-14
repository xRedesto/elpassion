import styled from 'styled-components';
import backgroundImage from 'assets/images/background.jpg';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    display:flex;
    justify-content:center;
    align-items:center;
`