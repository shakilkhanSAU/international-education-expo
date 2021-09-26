import React from 'react';
import TeacherName from '../TeacherName/TeacherName';
import './Cart.css'
import background from './invite.png'

const Cart = (props) => {
    const teachers = props.cart;
    return (
        <div className="invite-cart card">
            <img className="img-fluid" src={background} alt="" />
            <h3 className="cart-title">Invited Teacher</h3>
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