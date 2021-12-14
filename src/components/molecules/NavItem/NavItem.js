import React from 'react'
import {Wrapper, StyledAmount, StyledTitle} from './NavItem.styles'

const NavItem = ({Icon, title, amount, isActive}) => {
    return (
        <Wrapper className={isActive && "-active"}>
            {Icon}
            <StyledTitle>{title}</StyledTitle>
            <StyledAmount>{amount}</StyledAmount>
        </Wrapper>
    )
}

export default NavItem
