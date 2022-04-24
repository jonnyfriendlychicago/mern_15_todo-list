import React from 'react';
// import React, { useState } from 'react';      

const GroceryCmp2 = (props) => {
    // this could just as easily come from props
    // const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    
    const  groceryListx = props; 

    return (
        <ul>
        {
            groceryListx.map( (item, index) => 
                <li key={ index }> { item }</li>
            )
        }
        </ul>
    ); 
}
    
export default GroceryCmp2;