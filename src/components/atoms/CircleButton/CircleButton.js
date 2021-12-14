import React from 'react'
import {Circle} from './CircleButton.styles'

const CircleButton = ({type}) => {
    const typeIntoColor = (type) =>{
        switch(type){
            case 'close':
                return '#ff584f';
            case 'expand':
                return '#ffbb1b';
            case 'hide':
                return '#00cd47';
            default:
                return '#fff';
        }
    }
    return (
        <Circle color={typeIntoColor(type)}/>
    )
}

export default CircleButton
