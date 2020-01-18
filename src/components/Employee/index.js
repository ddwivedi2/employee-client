import React from 'react';
import './index.scss'

function Employee(props) {
    console.log(props);
    return(
        <div className="container">
            <div>Particular employee</div>
        </div>
    );
}

export default Employee;
