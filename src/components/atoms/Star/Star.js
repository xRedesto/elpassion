import React from 'react'
import styled from 'styled-components'
import {ReactComponent as StarIcon} from 'assets/icons/icon-star.svg'


const StyledStarIcon = styled(StarIcon)`
    margin-left:15px;
    cursor: pointer;
    
    .cls-1{
        fill: ${(props) => props.checked ? '#21233d' : 'white'};
        stroke: #e0e0e0;
        transition: fill 150ms;
    }
`

const Star = (props) =>{
    return (
        <StyledStarIcon {...props} />
    )
}

export default Star
