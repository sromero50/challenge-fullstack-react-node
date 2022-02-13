import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/authContext";
const Home = () => {
    const auth = useContext(AuthContext)

    const [total, setTotal] = useState()
    const [lastTransactions, setLastTransactions] = useState([])

    useEffect(() => {
        let last10 = auth.transactions.slice(Math.max(auth.transactions.length - 10, 0))
        setLastTransactions(last10.reverse())

        let expense = 0
        let income = 0


        auth.transactions.forEach(item => {
            if (item.type === "Income") {
                income += item.amount
                return income

            } else {
                expense += item.amount
                return expense
            }
        })


        setTotal(income - expense)
    }, [auth.transactions])


    return <div className='container p-5 box mt-5'>
        <h1 className='bg-light text-center border border-dark rounded' >Current balance: {total}</h1>
        <div className="table-responsive" >
            <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'>Type</th>
                        <th scope='col'>Concept</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Date</th>
                    </tr>

                </thead>
                <tbody className='table-dark table-striped'>
                    {lastTransactions.map(item => {
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
            <button className='btn btn-danger col-md-12' >Operations</button>
        </a>
    </div>;
};

export default Home;
