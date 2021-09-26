import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Main.css'


const Main = () => {
    const [persons, setPerson] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./teacher.JSON')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);
    // handle invite button 
    const handleInviteButton = (teacher) => {
        const exist = cart.includes(teacher)
        if (!exist) {
            const NewCart = [...cart, teacher]
            setCart(NewCart)
        }
        else {
            alert('Teacher is Already invited.')
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="teacher-container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            persons.map(person => <Teacher
                                key={person.key}
                                teacher={person}
                                handleInviteButton={handleInviteButton}
                            ></Teacher>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Main;