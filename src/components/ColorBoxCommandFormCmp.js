import React, { useState } from 'react';
import {Card, Form, Dropdown, DropdownButton} from 'react-bootstrap';
    
const ColorBoxCommandFormCmp = (props) => {
    
    const {boxArray, setItboxArray} = props; 
    
    const [formColorFieldValue, set_formColorFieldValue] = useState("");
    
    const handleColorChange = (e) => set_formColorFieldValue(e.target.value)  // mirror earlier des
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setItboxArray([...boxArray, formColorFieldValue ])
        console.log("formColorFieldValue:", formColorFieldValue)
        set_formColorFieldValue("")  // this line by JRF clears the form
    };

    return (
        <>
        <Card style={ { width: '450px' , padding: '10px'}} >
            <h1>Add a box!</h1>
            <Form onSubmit={ handleSubmit }>    
                <Form.Group className="mb-3 bg-white" controlId="exampleForm.ControlInput201">
                    <Form.Label>Color:</Form.Label>
                    <Form.Control     
                        style = {{width: '250px', height: '25px'}}
                        type = "textarea" 
                        // placeholder="Enter your color here"
                        value={ formColorFieldValue }
                        onChange={ handleColorChange } // mirror earlier des    
                    />
                </Form.Group>
                {/* <Form.Select 
                        style = {{width: '350px', height: '35px'}} 
                        aria-label="Default select example"
                        onSelect={ handleColorChange }  >
                        
                        <option>Open this select menu</option>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        value={ formColorFieldValue }
                        

                </Form.Select> */}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput202">
                    <Form.Control style={ { width: '150px' }}className ="btn btn-primary" type="submit" value="Add it!" />
                </Form.Group>

            </Form>
        </Card>    
        </>
    );
};
    
export default ColorBoxCommandFormCmp;
