import { useContext } from "react";
import ShoppingItemsContext from "../context/ShoppingItemsContext";
import ShoppingItem from "./ShoppingItem";

const ShoppingBasket = () => {

    const {basketItems} = useContext(ShoppingItemsContext);

    const basketItemNodes = basketItems.map((item, index) => {
        return <ShoppingItem key={index} item={item} />
    })

    return (
        <div>
           <hr />
            <h3>Shopping Basket &#128722;</h3>
             <ul>
                {basketItemNodes}
             </ul>
        </div>
    )
}

export default ShoppingBasket;