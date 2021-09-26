import React from 'react';
import TeacherName from '../TeacherName/TeacherName';
import './Cart.css'

const Cart = (props) => {
    const teachers = props.cart;
    return (
        <div className="invite-cart card">
            <h1 className="cart-title">Invited Teacher</h1>
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