import React from 'react';
import {Link} from 'react-router-dom'
const PageErro = () => {
    return (
            <div>
            <h1 style={{color:'red', textAlign :"center", fontSize : '100px'}}> PAGE ERROR</h1>
            <Link to='/contact'>PAGE HOME</Link>
            </div>
    );
}

export default PageErro;
