import React from 'react'
import {Wrapper} from './MainTemplate.styles'
import IssueList from 'components/organisms/IssueList/IssueList';

const MainTemplate = () => {
    return (
        <Wrapper>
            <IssueList/>
        </Wrapper>
    )
}

export default MainTemplate
