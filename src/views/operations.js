import React from 'react';
import { Form } from '../components/form';
import OperationList from '../components/operationList';
import { Link } from 'react-router-dom';
const Operations = (props) => {
    return <div className='container p-5 box mt-5'>
        
        <Link to="/" className='p-5 ms-5'>
            <i className="fas fa-angle-left"></i>
        </Link>
        <div className='text-center mt-2'>
            <h1 className='bg-light border border-dark  col-md-6 m-auto my-2 rounded'>Form</h1>
            <Form />
        </div>
        <div  className='text-center mt-5'>
            <h1 className='bg-light border border-dark  col-md-6 m-auto my-2 rounded'>Operations</h1>
            <OperationList transactions={props.transactions}  />
        </div>
    </div>;
};

export default Operations;
