import React from 'react';
import TeacherName from '../TeacherName/TeacherName';
import './Cart.css'
import background from './invite.png'

const Cart = (props) => {
    const teachers = props.cart;
    let total = 0;
    for (const teacher of teachers) {
        total = total + teacher.salary;
    }
    return (
        <div className="invite-cart card">
            <img className="img-fluid" src={background} alt="" />
            <h5 className="cart-title">Invited Teacher: {teachers.length}</h5>
            <h5 className="cart-title">Total Cost: ${total}</h5>
            <hr />
            {
                teachers.map(teacher => <TeacherName
                    key={teacher.key}
                    teacher={teacher}
                ></TeacherName>)
            }
        </div>
    );
};

export default Cart;