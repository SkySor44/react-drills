import React, {Component} from 'react'


function Image(props){
    return (
        <div>
            <img src = {props.myImage}/>
        </div>
    )
}

export default Image