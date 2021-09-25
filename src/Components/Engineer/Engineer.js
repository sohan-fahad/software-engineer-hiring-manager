import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faDownload } from '@fortawesome/free-solid-svg-icons'
import './Engineer.css'

const Engineer = (props) => {
    const { name, age, expertise, experience, expectedSalary, img } = props.engineer
    const hireIcon = <FontAwesomeIcon icon={faSearchDollar} />
    const downloadIcon = <FontAwesomeIcon icon={faDownload} />
    return (
        <div className="engineer">
            <div className="engineer-container">
                <div className="engineer-img">
                    <img src={img} alt=""/>
                </div>
                <div className="engineer-info">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div className="engineer-details">
                        <h5>Age: {age}</h5>
                        <h5>Expertise: {expertise}</h5>
                        <h5>Experience: {experience}</h5>
                        <h5>Expected Salary: {expectedSalary}</h5>
                    </div>
                    <div className="btn-section">
                        <button className="engineer-btn">{downloadIcon} Download CV</button>
                        <button className="engineer-btn" onClick={() => props.handleHireCart(props.engineer)}>{hireIcon} add to Hire cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engineer;