import React from 'react'
import Nav from 'components/organisms/Nav/Nav'
import {Wrapper} from './SidePanel.styles'
import AppControls from 'components/molecules/AppControls/AppControls'

const SidePanel = () => {
    return (
        <Wrapper>
            <AppControls/>
            <Nav/>
        </Wrapper>
    )
}

export default SidePanel
