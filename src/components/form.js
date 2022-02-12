import React, { useState, useContext } from 'react';
import AuthContext from "../Context/authContext";

export const Form = () => {
    const auth = useContext(AuthContext)

    var current = new Date();
    current.setDate(current.getDate());
    var date = current.toISOString().substr(0, 10);

    const [form, setForm] = useState({ concept: "", amount: "", date: date, type: "" });

    const handleSubmit = async event => {
        event.preventDefault();
        auth.postTransaction(form.concept, form.amount, form.date, form.type)
    };


    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
    };


    return <div className='container col-md-6'>
        <form onSubmit={handleSubmit} >
            <div>
                <input onChange={handleChange} className='form-control' name="concept" type="text" value={form.concept} placeholder="Description" required />
            </div>
            <div>
                <input onChange={handleChange} className='form-control' name="amount" type="number" value={form.amount} placeholder="Amount" required/>
            </div>
            <div>
                <input onChange={handleChange} className='form-control' name="date" type="date" value={form.date} required/>
            </div>
            <div>
                <select name="type" onChange={handleChange} className='form-select' required>
                    <option hidden>Type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button type='submit' className='btn btn-danger col-md-12' >Submit</button>
        </form>
    </div>;
};
