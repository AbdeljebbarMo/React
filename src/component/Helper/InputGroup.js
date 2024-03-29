import React from 'react';

const InputGroup = (props) => {
    return (
        <div className="form-group">
            <lable>{props.name} </lable>
            <input type={props.type} className="form-control" 
            Value={props.val} 
            onChange={props.onchange} 
            name={props.nam} />
        </div>
    );
}

export default InputGroup;
