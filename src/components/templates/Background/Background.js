import React from 'react'
import { Background as StyledBackground} from './Background.styles'

function Background({children}) {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    )
}

export default Background
