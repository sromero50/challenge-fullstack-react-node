import React from 'react';
import { Form } from '../components/form';
import OperationList from '../components/operationList';
const Operations = () => {
    return <div>
        <div className='text-center mt-5'>
            <h1 >Form</h1>
            <Form />
        </div>
        <div  className='text-center mt-5'>
            <h1>Operations</h1>
            <OperationList />
        </div>
    </div>;
};

export default Operations;
