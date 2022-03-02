import { useContext } from "react";
import ShoppingItemsContext from "../context/ShoppingItemsContext";
import ShoppingItem from "./ShoppingItem";

const ShoppingBasket = () => {

    const {basketItems} = useContext(ShoppingItemsContext);

    const basketItemNodes = basketItems.map((item, index) => {
        return <ShoppingItem key={index} item={item} />
    })

    return (
        <ul>
            {basketItemNodes}
        </ul>
    )
}

export default ShoppingBasket;