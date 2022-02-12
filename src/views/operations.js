import React from 'react';
import { Form } from '../components/form';
import OperationList from '../components/operationList';
import { Link } from 'react-router-dom';
const Operations = (props) => {
    return <div>
        
        <Link to="/" className='p-5 ms-5'>
            <i className="fas fa-backward" />
        </Link>
        
        <div className='text-center mt-2'>
            <h1>Form</h1>
            <Form />
        </div>
        <div  className='text-center mt-5'>
            <h1>Operations</h1>
            <OperationList transactions={props.transactions}  />
        </div>
    </div>;
};

export default Operations;
