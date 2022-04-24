import React, { useState } from 'react';
import {Card, Form} from 'react-bootstrap';
    
const MessageFormCmp = (props) => {
    
    const {onNewMessage} = props; 
    
    const [formFieldValue, set_formFieldValue] = useState("");
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // what should we do with the message?
    // };
    
    const handleMsgChange = (e) => set_formFieldValue(e.target.value)  // mirror earlier des
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.onNewMessage( msg );
        onNewMessage( formFieldValue ); // mirror earlier design
        console.log("formFieldValue:", formFieldValue)
        set_formFieldValue("")  // this line by JRF clears the form
    };

    return (
        <>
        <Card style={ { width: '450px' , padding: '10px'}} >
            <h1>Update Message</h1>
            <Form onSubmit={ handleSubmit }>    
                <Form.Group className="mb-3 bg-white" controlId="exampleForm.ControlInput101">
                    {/* <Form.Control 
                        backgroundcolor='3CBC8D' 
                        type="textarea" 
                        placeholder="" 
                        value={firstName} 
                        onChange={ validate_firstName }  
                        /> */}
                    <Form.Control     
                        type = "textarea" 
                            // rows="4" cols="50"
                        style = {{width: '350px', height: '100px'}}
                        placeholder="Enter your message here"
                            // onChange={ (e) => setMsg(e.target.value) }
                        value={ formFieldValue }
                        onChange={ handleMsgChange } // mirror earlier des    
                    />
                </Form.Group>
                {/* <input type="submit" value="Send Message" /> */}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput102">
                    <Form.Control style={ { width: '150px' }}className ="btn btn-primary" type="submit" value="Send Message" />
                </Form.Group>

            </Form>
        </Card>    
        </>
    );
};
    
export default MessageFormCmp;
