import React from 'react';
import './TeacherName.css'

const TeacherName = (props) => {
    const { name } = props.teacher;
    return (
        <div className="teacher-name">
            <i className="fas fa-user-tie"></i><span style={{ paddingLeft: '15px' }}>{name}</span>
        </div>

    );
};

export default TeacherName;