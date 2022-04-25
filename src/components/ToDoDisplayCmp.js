import React, {useState} from 'react'; 
import {Card, Form, Row, Col} from 'react-bootstrap'; 

const ToDoDisplayCmp = (props) => {

    const {toDo, index, toDoList, toDoListSet} = props; 

    const handleDeleteButton = (index) => {
        const toDoListFiltered = toDoList.filter((valueFromList, i) => i !== index); 
        toDoListSet(toDoListFiltered); 
    }

    const handleCheckbox = (index) => {
        const toDoListCheckResolution = toDoList.map((toDo, i ) => {
            if (index === i) {
                toDo.complete = !toDo.complete;
                // below is professed to be  best practice but overkill.  
                // const toDoUpdated = { ... toDo, complete: !toDo.complete}; 
                // return  toDoUpdated; 
            }
            return toDo; 
        }); 

        toDoListSet(toDoListCheckResolution); 
    };

    // {toDoList.map((toDo, i) => {
    //     const toDoClasses = [];
        
    //     if (toDo.complete) {
    //         toDoClasses.push["line-through"]; 
    //     }
    // })}

    const toDoClasses = [];        
    
    if (toDo.complete) {
        toDoClasses.push("strikeThru"); 
        // toDoClasses.push("strikeThru"); 
    }

    return (
        <>
        <Card> 
            {/* <p> {toDo}</p> */}
            {/* {toDo} */}
            <Row>
                <Col xs="auto">
                    <input 
                        type="checkbox"
                        checked={toDo.complete}  
                        onChange = {(e) => { handleCheckbox (index) }} 
                        style = {{ margin: "5px"}}  
                        />
                </Col>
                <Col sm={6} className="my-1">
                    <span className={toDoClasses.join(" ")}> 
                        {toDo.text}
                    </span>
                </Col>
                <Col xs="auto">
                    <button 
                        onClick = {(e) => { handleDeleteButton (index) }} 
                        style = {{ margin: "2px"}}
                        >Delete Task</button>
                </Col>
            </Row>
        </Card>
        
        </>
    )
}

export default ToDoDisplayCmp; 