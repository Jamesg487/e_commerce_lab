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
        {"name": "ABBA CD", "price": 9.99},
        {"name": "Coffee", "price": 2.99}
    ])

    const [basketItems, setBasketItems] = useState([]);

    const addBasketItem = (item) => {
        const itemInBasket = basketItems.includes(item);
        if (itemInBasket) {basketItems.splice(basketItems.indexOf(item), 1)
            const copyOfBasketItems = [...basketItems]
            setBasketItems(copyOfBasketItems);
        }else {
            const copyOfBasketItems = [...basketItems, item]
            setBasketItems(copyOfBasketItems)
        }
    }


  

    return (
        <>
            <ShoppingItemsContext.Provider value={{shoppingItems, setShoppingsItems, basketItems, setBasketItems, addBasketItem}}>
            <ShoppingItemsList />
            <ShoppingBasket />
            </ShoppingItemsContext.Provider>
        </>
    )

}

export default ShoppingItemsContainer;