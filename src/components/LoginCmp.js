import React, { useState } from 'react';  // added the comma/useState to enable mutable props
import {Card, Form} from 'react-bootstrap';


//  content for form
const LoginCmp = (props) => {
    
    const [firstName, set_firstName] = useState("");
    const [lastName, set_lastName] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");  
    const [confirmPassword, set_confirmPassword] = useState("");  
    const [hasBeenSubmitted, set_hasBeenSubmitted] = useState(false);
    

    const [firstName_valMsg, set_firstName_valMsg] = useState("");
    const [lastName_valMsg, set_lastName_valMsg] = useState("");
    const [email_valMsg, set_email_valMsg] = useState("");
    const [password_valMsg, set_password_valMsg] = useState("");
    const [confirmPassword_valMsg, set_confirmPassword_valMsg] = useState("");
    

    // const [firstNameNiceMsg, setFirstNameNiceMsg] = useState("");

    // const [holdUsername, setHoldUsername] = useState("");
    // const [holdEmail, setholdEmail] = useState("");
    // const [holdPassword, setholdPassword] = useState("");  

    const newUser = { firstName, lastName, email, password, confirmPassword  };

    // const holdNewUser = {holdUsername, holdEmail, holdPassword}; 

    // const usernameDoIt = (e) => setUsername(e.target.value)
    
    // const firstNameDoIt = (e) => setFirstName(e.target.value); 
    // const lastNameDoIt = (e) => setLastName(e.target.value); 
    // const emailDoIt = (e) => setEmail(e.target.value); 
    // const passwordDoIt = (e) => setPassword(e.target.value); 
    // const confirmPasswordDoIt = (e) => setConfirmPassword(e.target.value); 


    const validate_firstName = (e) => {
        set_firstName(e.target.value);
        if(e.target.value.length < 1) {
            set_firstName_valMsg("First Name is required!");
        } else if(e.target.value.length < 2) {
            set_firstName_valMsg("First must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            set_firstName_valMsg("Nice typing, bro!");
        }
    }
    
    const validate_lastName = (e) => {
        set_lastName(e.target.value);
        if(e.target.value.length < 1) {
            set_lastName_valMsg("Last Name is required!");
        } else if(e.target.value.length < 2) {
            set_lastName_valMsg("Last must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            set_lastName_valMsg("Nice typing, bro!");
        }
    }

    const validate_email = (e) => {
        set_email(e.target.value);
        if(e.target.value.length < 1) {
            set_email_valMsg("Email is required!");
        } else if(e.target.value.length < 5) {
            set_email_valMsg("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            set_email_valMsg("Nice typing, bro!");
        }
    }

    const validate_password = (e) => {
        set_password(e.target.value);
        if(e.target.value.length < 1) {
            set_password_valMsg("Password is required!");
        } else if(e.target.value.length < 8) {
            set_password_valMsg("Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            set_password_valMsg("Nice typing, bro!");
        }; 
        
        // console.log("password:" , password)
    }

    // below works, now trying something else below it 
    // const validate_confirmPassword = (e) => {
    //     setConfirmPassword(e.target.value);
    //     if(e.target.value.length < 1) {
    //         set_confirmPassword_valMsg("Confirm Password is required!");
    //     } else if(e.target.value.length < 8) {
    //         set_confirmPassword_valMsg("Confirm password must be 8 characters or longer!");
    //     } else {
    //         // an empty string is considered a "falsy" value
    //         set_confirmPassword_valMsg("Nice typing, bro!");
    //     }
    // }
    
    const validate_confirmPassword = (e) => {
        set_confirmPassword(e.target.value);
        if(confirmPassword !== password) {
            set_confirmPassword_valMsg("Not same!");
        } else if (confirmPassword === password) {
            set_confirmPassword_valMsg("Nice typing, bro!");
        }; 

        console.log("password:" , password)
        console.log("newUser.confirmPassword:", newUser.confirmPassword)
    }

    // const niceWorkFirstName = (e) => {
    //     setFirstNameNiceMsg("Way to type, bro!")
    // }

    // const usernameDoItHold = (e) => 
    // setHoldUsername(e.target.value)
    // ; 

    const createUser = (e) => {
      // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();
    // shorthand ES6 syntax for building an object - see notes above
    console.log("Welcome", newUser);
    set_firstName(""); 
    set_lastName(""); 
    set_email(""); 
    set_password(""); 
    set_confirmPassword(""); 
    set_hasBeenSubmitted( true );
    set_firstName_valMsg(""); 
    set_lastName_valMsg(""); 
    set_email_valMsg(""); 
    set_password_valMsg(""); 
    set_confirmPassword_valMsg("");
    
    // holdUsername(setUsername );     
    // console.log("holdNewUser.holdUsername:", holdNewUser.holdUsername)
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome!  Please submit the form.";
    //     }
    // };

    return(
    <>
        <Card style={ { width: '500px' , padding: '10px'}} >
            {/* <h3>{ formMessage() }</h3> */}
            {/* <p>OLD TEXT: Please provide your info:</p> */}
            <Form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <Form.Group className="mb-3 bg-white" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name:</Form.Label>
                    {/* <Form.Control backgroundcolor='3CBC8D' type="textarea" placeholder="" value={firstName} onChange={ handleFirstName } onBlur = { niceWorkFirstName } /> */}
                    <Form.Control backgroundcolor='3CBC8D' type="textarea" placeholder="" value={firstName} onChange={ validate_firstName }  />
                    <Form.Text className="text-muted">
                        {
                        firstName_valMsg ?
                        <p>{ firstName_valMsg } </p>:
                        ''
                        }   
                        {/* {
                        firstNameNiceMsg ?
                        <p>{ firstNameNiceMsg } </p>:
                        ''
                        }    */}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="textarea" placeholder="" value={lastName} onChange={ validate_lastName } />
                    <Form.Text className="text-muted">
                        {
                        lastName_valMsg ?
                        <p>{ lastName_valMsg } </p>:
                        ''
                        }   
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="" value={email} onChange={ validate_email } />
                    <Form.Text className="text-muted">
                        {
                        email_valMsg ?
                        <p>{ email_valMsg } </p>:
                        ''
                        }   
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="" value={password} onChange={ validate_password } />
                    <Form.Text className="text-muted">
                        {
                        password_valMsg ?
                        <p>{ password_valMsg } </p>:
                        ''
                        }   
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="" value={confirmPassword} onChange={ validate_confirmPassword } />
                    <Form.Text className="text-muted">
                        {
                        confirmPassword_valMsg ?
                        <p>{ confirmPassword_valMsg } </p>:
                        ''
                        }   
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Control className ="btn btn-primary" type="submit" value="Create User" />
                </Form.Group>
                <div>
                    <p>NEW TRY:::</p>
                    {confirmPassword !== password ? <p>Not same!</p> : null}
                </div>
            </Form>
        </Card>
{/*         
        <Card style={ { width: '350px' , margin: '5px',  display: 'flex', justifyContent: 'space-around'} } >
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ firstNameDoIt } />
                </div>

                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ lastNameDoIt } />
                </div>

                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ emailDoIt } />
                </div>

                <div>
                    <label>Password: </label> 
                    <input type="text" value={password} onChange={ passwordDoIt } />
                </div>

                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" value={confirmPassword} onChange={ confirmPasswordDoIt } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </Card>     */}
        
        <Card style={ { width: '500px' , padding: '10px'}} >
            <p>Info you provided:</p>
            {/* {newUser.username} <br></br> */}
            <p>First Name: {newUser.firstName} </p>
            <p>Last Name:{newUser.lastName} </p>
            <p>Email:{newUser.email} </p>
            <p>Password:{newUser.password} </p>
            <p>Confirmed Password:{newUser.confirmPassword} </p>
        </Card>    

    </>
    )
};
    
export default LoginCmp;

