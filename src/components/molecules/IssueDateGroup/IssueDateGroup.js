import React from 'react'
import { StyledDate } from './IssueDateGroup.styles'

function IssueDateGroup({date, children}) {
    return (
        <div>
            <StyledDate>{date}</StyledDate>
            {children}
        </div>
    )
}

export default IssueDateGroup
