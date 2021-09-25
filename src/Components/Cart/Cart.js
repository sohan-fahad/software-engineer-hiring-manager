import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const { totalHired, displayHiredName } = props
    let total = 0
    for (const eachTota of totalHired) {
        total = total + eachTota.expectedSalary
    }
    const name = displayHiredName.map(eachDisplay => <h5>{eachDisplay}</h5>
    )
    const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div>
            <h3>{userIcon} Total Add: {totalHired.length}</h3>
            <h3>Total: ${total}</h3>
            <div className="name">{name}</div>
            <button className="btn-hired">Hired</button>
        </div>
    );
};

export default Cart;