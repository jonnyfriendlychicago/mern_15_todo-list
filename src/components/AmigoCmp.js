import React, { useState } from 'react';  // added the comma/useState to enable mutable props
import {Button, Card} from 'react-bootstrap';

const AmigoCmp = (props) => {
    
    const { firstName, lastName, initAge } = props; 
    
    const [age, setAge] = useState (initAge ); 
    
    const oneUp = (event) => setAge(age + 1 ); 
    const oneDown = (event) => setAge(age - 1 ); 

    
    return (
    <>
    <Card style={ { width: '250px' , margin: '5px'} } >
        {/* <Card.Img variant="top" src="/logo192.png" /> */}
        <Card.Body>
            <Card.Title >{lastName}, {firstName}</Card.Title>
            <Card.Text>
            Age: {age}
            </Card.Text>
            <Button variant="primary" onClick={ oneUp  }> 1 Up It </Button>{' '}
            <Button variant="secondary" onClick={ oneDown  }> 1 Down It </Button>{' '}
        </Card.Body>
    </Card>
    </>
    ) 
}; 

export default AmigoCmp; 