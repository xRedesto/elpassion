import React from 'react'

import Issue from 'components/molecules/Issue/Issue';
import IssueDateGroup from 'components/molecules/IssueDateGroup/IssueDateGroup'
import {Wrapper} from './IssueList.styles'

const IssueList = () => {
    return (
        <Wrapper>
            <IssueDateGroup date='19-07-2016'>
                <Issue title="Page changes" isChecked />
                <Issue title="Review of last issues" isChecked/>
            </IssueDateGroup>
            <IssueDateGroup date='18-07-2016'>
                <Issue title="Visual UI Update Review" />
                <Issue title="Sidebar changes"/>
            </IssueDateGroup>
            <IssueDateGroup date='15-07-2016'>
                <Issue title="Crash update" />
                <Issue title="Page visual UI Update Review" isChecked/>
                <Issue title="Sidebar update" />
            </IssueDateGroup>
            <IssueDateGroup date='14-07-2016'>
                <Issue title="Crash issue" isChecked />
                <Issue title="Visual update & Crash resolve" isChecked />
            </IssueDateGroup>
        </Wrapper>
    )
}

export default IssueList
