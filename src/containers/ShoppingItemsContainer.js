import { useState } from "react";
import ShoppingItemsContext from "../context/ShoppingItemsContext";
import ShoppingItemsList from "../components/ShoppingItemsList";
import ShoppingBasket from "../components/ShoppingBasket";


const ShoppingItemsContainer = () => {

    const [shoppingItems, setShoppingsItems] = useState([
        {"name": "USB Cable", "price": 1.99},
        {"name": "Nintendo Switch", "price": 329.99},
        {"name": "Final Fantasy VII", "price": 25.00},
        {"name": "Jumper", "price": 19.99},
        {"name": "ABBA CD", "price": 9.99}
    ])

    const [basketItems, setBasketItems] = useState([]);

    return (
        <>
            <ShoppingItemsContext.Provider value={{shoppingItems, setShoppingsItems, basketItems, setBasketItems}}>
            <ShoppingItemsList />
            <ShoppingBasket />
            </ShoppingItemsContext.Provider>
        </>
    )

}

export default ShoppingItemsContainer;