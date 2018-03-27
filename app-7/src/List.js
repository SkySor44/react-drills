import React, {Component} from 'react'
import Todo from './Todo'


function List (props){
    var newList = props.myList.map((e, i) =>{
        return (
            <Todo key = {i} tasks = {e}/>
        )
    })
    
    return (
        <div>
        {newList}
        </div>
    )
}

export default List