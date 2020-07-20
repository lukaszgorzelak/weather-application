import React from 'react';

const Form = (props) => {
    return (
        
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} onChange={props.change}  placeholder="Podaj miasto"/>
            <button>Wyszukaj miasto</button>
        </form> 
    
    );
}
 
export default Form;
