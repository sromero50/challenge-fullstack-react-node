import AuthContext from './authContext'
import React, { useState, useEffect } from 'react'

function AuthProvider(props) {

    const [transactions, setTransactions] = useState([])
    const [update, setUpdate] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/transactions")
                const responseBody = await response.json();
                setTransactions(responseBody)

            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()

    }, [update])


    const postTransaction = async (concept, amount, date, type) =>{
        setUpdate(true)
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
              concept: concept,
              amount: amount,
              type: type,
              date: date
            });
      
            var requestOptions = {
              method:'POST',
              body: raw,
              headers: myHeaders,
              redirect: 'follow'
            };
      
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/transactions", requestOptions);
            const responseBody = await response.json();
            setUpdate(false)
          } catch (error) {
            setUpdate(false)
            console.log(error)
          }
    }

    const editTransaction = async (id, concept, amount) => {
        setUpdate(true)
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


            var raw = JSON.stringify({
                concept: concept,
                amount: amount
            });

            var requestOptions = {
                method: 'PUT',
                body: raw,
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/transactions/" + id, requestOptions);
            const responseBody = await response.json();
            setUpdate(false)
        } catch (error) {
            setUpdate(false)
            console.log(error)
        }
    }

    const deleteTransaction = async (id) => { 
        if(window.confirm("Do you want to delete this transaction?")){
            setUpdate(true)
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/transactions/" + id, requestOptions);
            const responseBody = await response.json();
            setUpdate(false)
        } catch (error) {
            setUpdate(false)
            console.log(error)
        }
        }
        
    }

    return <AuthContext.Provider value={{
        transactions,
        editTransaction,
        deleteTransaction,
        postTransaction
    }} >
        {props.children}
    </AuthContext.Provider>

}

export default AuthProvider