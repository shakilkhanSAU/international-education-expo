import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { img, name, country, field, age, salary } = props.teacher;
    return (
        <div className="col">
            <div className="single-teacher card h-100">
                <img src={img} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="">{name}</h5>
                    <p className="card-text">From: {country}</p>
                    <p>Age: {age}</p>
                    <p>A great teacher of {field}</p>
                    <p>Cost for one summit: <span className="fw-bold">${salary}</span></p>
                    <button
                        onClick={() => props.handleInviteButton(props.teacher)}
                        className="invite-btn"
                    ><i className="fas fa-paper-plane"></i> Invite Teacher</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;