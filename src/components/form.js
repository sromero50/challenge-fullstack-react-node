import React from 'react';

export const Form = () => {
    return <div className='container col-md-6'>
        <form>
            <div>
                <input className='form-control' type="text" value="" placeholder="Description" />
            </div>
            <div>
                <input className='form-control' type="number" value="" placeholder="Sum" />
            </div>
            <div>
                <input className='form-control' type="date" value="" placeholder="Date" />
            </div>
            <div>
                <select className='form-select'>
                    <option selected disabled>Type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
            </div>
        </form>
    </div>;
};
