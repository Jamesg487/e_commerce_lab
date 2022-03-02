import {useContext} from 'react'
import ShoppingItem from "./ShoppingItem";
import ShoppingItemsContext from "../context/ShoppingItemsContext";

const ShoppingItemsList = () => {

    const {shoppingItems} = useContext(ShoppingItemsContext);

    const shoppingItemNodes = shoppingItems.map((item, index) => {
        return <ShoppingItem key={index} item={item} />
    })

    return (
        <ul>
            {shoppingItemNodes}
        </ul>
    )

}

export default ShoppingItemsList;