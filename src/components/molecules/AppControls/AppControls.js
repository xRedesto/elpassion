import React from 'react'
import CircleButton from 'components/atoms/CircleButton/CircleButton'
import {Wrapper} from './AppControls.styles'

const AppControls = () => {
    return (
        <Wrapper>
            <CircleButton color="tomato"/>
            <CircleButton color="orange"/>
            <CircleButton color="green"/>
        </Wrapper>
    )
}

export default AppControls
