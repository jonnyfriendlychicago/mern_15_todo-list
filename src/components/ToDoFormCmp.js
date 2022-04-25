import React,  {useState} from 'react'; // added this line
import {Card, Form} from 'react-bootstrap'; 

const ToDoFormCmp =  (props) => {

    const {toDoList, toDoListSet} = props; 
    
    const [toDo, toDoSet] = useState(""); 
    
    const handleTaskName = (e) => toDoSet(e.target.value); 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (toDo.length === 0) {
            return; 
        } 

        const toDoObject = {
            text: toDo, 
            complete: false
        }; 
        // console.log("toDo: ", toDo); 
        // toDoListSet([ ... toDoList, toDo]); 
        toDoListSet([ ... toDoList, toDoObject]); 
        console.log("toDoList:", toDoList); 
        toDoSet(""); 
        // toDoSet([]); 
    }

    return (
        <>
        <Card style = {{width: '700px', padding: '10px', border: "none"}} > 
            <h1>Add a Task</h1>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3 bg-white" controlId="ToDo01">
                    <Form.Label>Task Name:</Form.Label>
                    <Form.Control
                        style = {{width: '300px', height: "25px"}}
                        type = "textarea"
                        value={toDo}
                        onChange = {handleTaskName}
                    /> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="ToDo02">
                    <Form.Control style = {{width: "100px"}} className="btn btn-primary" type = "submit" value="Add To List"/>
                </Form.Group>
            </Form> 
        </Card>
        
        </>

    )
}

export default ToDoFormCmp; 