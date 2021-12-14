import React from 'react'
import {Wrapper} from './Nav.styles'
import NavItem from 'components/molecules/NavItem/NavItem'
import {ReactComponent as IconOpen} from 'assets/icons/icon-open-issue.svg'
import {ReactComponent as IconGithub} from 'assets/icons/icon-github.svg'
import {ReactComponent as IconClosed} from 'assets/icons/icon-closed-issue.svg'

const Nav = () => {
    return (
        <Wrapper>
            <NavItem title="All" amount={12} Icon={<IconGithub/>} isActive/>
            <NavItem title="Open" amount={4} Icon={<IconOpen/>} />
            <NavItem title="Closed" amount={8} Icon={<IconClosed/>} />
        </Wrapper>
    )
}

export default Nav
