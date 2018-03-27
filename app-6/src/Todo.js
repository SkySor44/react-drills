import React, {Component} from 'react'


function Todo (props){
    return (
        <div key = {props.key}>
            <p>{props.task}</p>
        </div>
    )
}

export default Todo