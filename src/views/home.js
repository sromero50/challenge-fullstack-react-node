import React from 'react';

const Home = () => {
    return <div className='container p-5'>
        <h1 className='bg-light text-center' >Total: 1000</h1>
        <div >
            <ul className='list-group'>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
                <li className="list-group-item">1</li>
            </ul>
        </div>
        <a href="/operations" >
            
                <button className='btn btn-danger col-md-12' >Operaciones</button>
         
        </a>
    </div>;
};

export default Home;
