import React, { useState, createContext } from 'react';

export const CreditList = createContext();

export const CreditProvider = (props) => {
    const [credit, setCredit] = useState([
        {
            id: 1,
            product: 'Carbon Credit',
            price: 120,
            description: 'More details goes here like description'
        },
        {
            id: 2,
            product: 'Carbon Credit',
            price: 120,
            description: 'More details about the product'
        },
        {
            id: 3,
            product: 'Carbon Credit',
            price: 120,
            description: 'More details for the item'
        },
        {
            id: 4,
            product: 'Carbon Credit',
            price: 120,
            description: 'More details to provide'
        }

    ]);

    const [cartItems, setCartItems] = useState("Hello Crat");

    return (
        <CreditList.Provider value={[credit, setCredit], {cartItems}}>
            {props.children}
        </CreditList.Provider>
    );
}