import React, {useState} from 'react'
import Star from 'components/atoms/Star/Star'
import { Wrapper, StyledTitle } from './Issue.styles'



function Issue({title, isChecked}) {
    const [checked, setChecked ] = useState(isChecked);
    
    const starClickHandler = () =>{
        setChecked(!checked);
        console.log(checked);
    }

    return (
        <Wrapper>
            <StyledTitle>{title}</StyledTitle>
            <Star onClick={starClickHandler} checked={checked}/>
        </Wrapper>
    )
}

export default Issue
