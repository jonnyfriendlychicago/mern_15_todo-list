import React from 'react';
// import React, { useState } from 'react';      

const GroceryCmp = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    
    return (
        <ul>
        {
            groceryList.map( (item, index) => 
                <li key={ index }> { item }</li>
            )
        }
        </ul>
    ); 
}
    
export default GroceryCmp;