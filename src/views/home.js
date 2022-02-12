import React, { useState, useContext }  from "react";
import AuthContext from "../Context/authContext";
const Home = () => {
    const auth = useContext(AuthContext)
    
    return <div className='container p-5'>
        <h1 className='bg-light text-center' >Total: 1000</h1>
        <div >
            <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>Type</th>
                        <th scope='col'>Concept</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Date</th>
                    </tr>

                </thead>
                <tbody  className='table-dark table-striped'>
                    {auth.transactions.map(item => {
                        return <tr key={item.id}>
                            <td>{item.type} </td>
                            <td>{item.concept} </td>
                            <td>{item.amount} </td>
                            <td>{item.date} </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
        <a href="/operations" >
            <button className='btn btn-danger col-md-12' >Operaciones</button>
        </a>
    </div>;
};

export default Home;
