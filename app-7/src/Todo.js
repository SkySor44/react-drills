import React, {Component} from 'react'

function Todo(props){
    return (
        <div key = {props.key}>
            <p>{props.tasks}</p>
        </div>
    )
}

export default Todo