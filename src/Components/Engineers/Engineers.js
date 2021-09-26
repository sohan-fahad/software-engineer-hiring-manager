import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
import './Engineers.css';
import Cart from '../Cart/Cart'

const Engineers = () => {
    // This state for displaying engineers info
    const [engineers, setEngineers] = useState([])

    // This state for showing the selected for hire in cart
    const [totalHired, setTotalHire] = useState([])

    // This state for showing the selected hiring employee name
    const [displayHiredName, seDisplayHiredName] = useState([])

    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => setEngineers(data))
    }, [])

    // this even hanler for showing selected data in cart
    let handleHireCart = engineer => {
        const newEngineersHireInfo = [...totalHired, engineer]
        setTotalHire(newEngineersHireInfo)
        const newHired = [...displayHiredName, engineer.name]
        seDisplayHiredName(newHired)
    }
    return (
        <div className="engineers-container">
            <div className="engineersInfo-container">
                {
                    engineers.map(engineer => <Engineer
                        key={engineer.id}
                        handleHireCart={handleHireCart}
                        engineer={engineer}
                    >
                    </Engineer>)
                }
            </div>
            <div className="budgetCart-container">
                <Cart 
                key={totalHired.id}
                totalHired={totalHired} 
                displayHiredName={displayHiredName}
                ></Cart>
            </div>
        </div>
    );
};

export default Engineers;