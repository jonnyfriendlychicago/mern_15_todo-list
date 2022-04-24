import React from 'react';
    
const ComponentWithKidsCmp = (props) => {
    
    return(
        <div>
            <h1>{ props.header }</h1>
            { props.children }
        </div>
    );
}
    
export default ComponentWithKidsCmp;