import React, { useState } from 'react';
import {Card, Form} from 'react-bootstrap';
    
const MessageDisplayCmp = (props) => {

    const {message } = props;  // add this to make to mirror earlier

    return (
        <>
            <Card style={ { width: '450px' , padding: '10px'}} >
                <h1>Last Message</h1>
                {/* <pre>{ props.message }</pre> */}
                {/* <pre>{ message }</pre> */} 
                {/* what is this 'prev' stuff above? */}
                <div>{ message }</div> 
                {/* above mirror earlier des */}
            </Card>
        </>
    );
};
    
export default MessageDisplayCmp;

