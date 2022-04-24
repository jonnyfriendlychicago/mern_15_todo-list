
import './App.css';
import {Card} from 'react-bootstrap';
import React,  {useState} from 'react'; // added this line
// import React from 'react'; 
import AmigoCmp from './components/AmigoCmp';
import LoginCmp from './components/LoginCmp';
import ComponentWithKidsCmp from './components/ComponentWithKidsCmp';
import GroceryCmp           from './components/GroceryCmp';
import GroceryCmp2           from './components/GroceryCmp2';

import MessageFormCmp from './components/MessageFormCmp';
import MessageDisplayCmp from './components/MessageDisplayCmp';

import ColorBoxCommandFormCmp from './components/ColorBoxCommandFormCmp';
import ColorBoxDisplayCmp from './components/ColorBoxDisplayCmp';


// people on cards data
const peopleArr = [
  {
    firstName: "Shannon",
    lastName: "DosEquis",
    initAge: 25
  }
  ,
  {
    firstName: "Angela",
    lastName: "Modelo",
    initAge: 26
  },
  {
    firstName: "Bridget",
    lastName: "Morena",
    initAge: 33
  }
];


function App() {
  
  const groceryList2 = ["bananas", "apples", "blueberries", "strawberries"];
  
  // below line is the lifted state!
  const [currentMsg, setCurrentMsg] = useState("FTS, but give it a try.");
  
  const msgUpdateFunction = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }
  // here is another lifted state for boxes!
  const [boxArray, setItboxArray] = useState([]); 

  // here is another lifted state for boxes!
  const [boxArrayDeleted, setITboxArrayDeleted] = useState([]);  
  return (
    <>
    <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
              <a href="#" className="header_home_link" >
                  <h1 >Sitename</h1>
                  <h2>Feel the love.</h2>
              </a>
          </div>
          <div className="header_content_vert_right" > 
              <h2>firstName LastName</h2>
              <p>(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <a href="#">My Profile</a>
                  <a href="#">Logout</a>
              </div>
          </div>
      </div>
    </header>

    <main className="row_flex_center_top ">

      <div className="row_left" id="boxTime">
        <Card style={ { width: '800px' , padding: '10px' }} >
          <ColorBoxCommandFormCmp boxArray={ boxArray } setItboxArray={setItboxArray} />
              <Card style={ { width: '700px' , padding: '10px'}} >
                <h1>Your Boxes</h1>
                <div className ="d-flex flex-row flex-wrap" >
                  {boxArray.map((formColorFieldValue, index) => {
                      return <ColorBoxDisplayCmp 
                      key = {index} 
                      index={index} 
                      formColorFieldValue={formColorFieldValue} 
                      boxArray={ boxArray } 
                      setItboxArray={setItboxArray}/>
                    })}
                  </div>
              </Card>
            
        </Card>
      </div>
      
      <div className="row_left" id="groceryList1">
        <h1> Grocery List 1</h1>
        <GroceryCmp />
      </div>
      <div className="row_left" id="groceryList2">
        <h1> Grocery List 2</h1>
        {/* <GroceryCmp2 groceryListx={groceryList2} /> */}
      </div>
      <div className="row_flex_left_top" id="MsgDisplay">
        <MessageDisplayCmp message={ currentMsg } />
        <MessageFormCmp onNewMessage={ msgUpdateFunction } />
      </div>
      <div className="row_flex_left_top" id="PeopleCardArray">
        {peopleArr.map((personObj, index) => (
          <AmigoCmp
            key={index}
            firstName={personObj.firstName}
            lastName={personObj.lastName}
            initAge={personObj.initAge}
          />
        ))}
      </div>
      <div id="Login"> 
        <LoginCmp />
      </div>  
      <div className="App" id="KiddoComps">
        <ComponentWithKidsCmp header={ "Head Stuff sent from app.js prop field" }>
            <h4>These are children</h4>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </ComponentWithKidsCmp>  
      </div>
      <div id="elemetarypropsAmigoCmp"> 
        {/* <AmigoCmp firstName={"Jane"} lastName={"Dos Equis"}  initAge = {49}/> */}
        {/* <AmigoCmp firstName={"Negra"} lastName={"Modelo"}  initAge = {33}/>
        <AmigoCmp firstName={"Boricua"} lastName={"Morena"}  initAge = {39}/> */}
        
        {/* <form action="/process" method="post">
          <label htmlFor="fname">First name:</label><br></br>
          <input type="text" id="fname" name="fname"></input>
            <br></br>
        </form>  */}  
      </div>
    
    </main>
    </>
  );
}

export default App;
