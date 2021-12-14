import React from 'react'
import styled from 'styled-components'
import {ReactComponent as StarIcon} from 'assets/icons/icon-star.svg'


const StyledStarIcon = styled(StarIcon)`
    margin-left:15px;
    
    .cls-1{
        fill: ${(props) => props.checked ? '#21233d' : 'white'};
        stroke: #e0e0e0;
        transition: fill 150ms;
    }
`

const Star = (props) =>{
    return (
        <div>
            <StyledStarIcon {...props} />
        </div>
    )
}

export default Star
