import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { img, name, country, field, age, salary } = props.teacher;
    return (
        <div className="col">
            <div className="single-teacher card h-100">
                <img src={img} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h3 className="">{name}</h3>
                    <p className="card-text">From: <span className="fw-bold">{country}</span></p>
                    <p>Age: <span className="fw-bold">{age}</span></p>
                    <p>A great teacher of <span className="fw-bold">{field}</span></p>
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