import React, { useState, useContext } from 'react';
import AuthContext from "../Context/authContext";
const OperationList = () => {
  const auth = useContext(AuthContext)
  const [type, setType] = useState("Income")
  const [form, setForm] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };


  return <div className='container col-md-6'>
    <div>
      <select onChange={(e) => setType(e.target.value)} className='form-select'>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
    <div className='table-responsive-md'>
      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>Type</th>
            <th scope='col'>Concept</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody className='table-dark table-striped'>
          {auth.transactions.map(item => {
            return <React.Fragment key={item.id}>
              {type === item.type ? (<tr>
                <td>{item.type}</td>
                <td><input onChange={handleChange} type="text" name="concept" defaultValue={item.concept} /> </td>
                <td><input onChange={handleChange} type="number" name="amount" defaultValue={item.amount} /></td>
                <td>{item.date}</td>
                <td><i onClick={() => auth.editTransaction(item.id, form.concept, form.amount)} className="fas fa-edit"></i></td>
                <td><i onClick={() => auth.deleteTransaction(item.id)} className="fas fa-ban"></i></td>
              </tr>) : (null)}
            </React.Fragment>
          })}
        </tbody>
      </table>
    </div>
  </div>;
};

export default OperationList;
