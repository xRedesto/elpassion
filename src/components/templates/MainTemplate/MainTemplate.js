import React from 'react'
import {Wrapper} from './MainTemplate.styles'
import SidePanel from 'components/organisms/SidePanel/SidePanel'
import IssueList from 'components/organisms/IssueList/IssueList';

const MainTemplate = () => {
    return (
        <Wrapper>
            <SidePanel/>
            <IssueList/>    
        </Wrapper>
    )
}

export default MainTemplate
