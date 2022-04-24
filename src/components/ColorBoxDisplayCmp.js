import React from 'react';
import {Card} from 'react-bootstrap';
    
const ColorBoxDisplayCmp = (props) => {

    const {formColorFieldValue , index,  boxArray, setItboxArray, boxArrayDeleted, setITboxArrayDeleted} = props;  // add this to make to mirror earlier

    // const {} = props; 

    const handleDelButton = () => {
        // note on above: no preventDefault requried on clicks, and no "e" needed in ()
        
        // const whackedBoxArray = boxArray.filter((item, i) => i === index); 
        // // setITboxArrayDeleted(whackedBoxArray); 
        // setITboxArrayDeleted([...boxArrayDeleted, whackedBoxArray]); 

        // const whackedBoxArrayDisplay  = whackedBoxArray.map((item, index))

        // console.log("deleted: " , whackedBoxArrayDisplay)

        const survivingBoxArray = boxArray.filter((item, i) => i !== index); 
        setItboxArray(survivingBoxArray); 

        console.log(survivingBoxArray); 
    }; 
    
    return (
        
        <div style= {{ backgroundColor: formColorFieldValue, margin: "5px", padding: "5px" , height: "150px", width: "150px"}} >
            <p style={{color: "white"}}> Awesome {formColorFieldValue} Box </p>
            <button onClick= {handleDelButton}>Delete me </button>

        </div>   
        
    );
};
    
export default ColorBoxDisplayCmp;

