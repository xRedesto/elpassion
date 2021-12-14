import React from 'react'
import { Wrapper, StyledDate } from './IssueDateGroup.styles'

function IssueDateGroup({date, children}) {
    return (
        <Wrapper>
            <StyledDate>{date}</StyledDate>
            {children}
        </Wrapper>
    )
}

export default IssueDateGroup
