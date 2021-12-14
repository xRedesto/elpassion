import React from 'react'
import CircleButton from 'components/atoms/CircleButton/CircleButton'
import {Wrapper} from './AppControls.styles'

const AppControls = () => {
    return (
        <Wrapper>
            <CircleButton type="close"/>
            <CircleButton type="expand"/>
            <CircleButton type="hide"/>
        </Wrapper>
    )
}

export default AppControls
