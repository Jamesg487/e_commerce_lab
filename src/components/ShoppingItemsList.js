import {useContext} from 'react'
import styled from 'styled-components';
import ShoppingItem from "./ShoppingItem";
import ShoppingItemsContext from "../context/ShoppingItemsContext";

const ItemNodes = styled.ul`
    display: flex;
    flex-flow: row wrap;
`

const ShoppingItemsList = () => {

    const {shoppingItems} = useContext(ShoppingItemsContext);

    const shoppingItemNodes = shoppingItems.map((item, index) => {
        return <ShoppingItem key={index} item={item} />
    })

    return (

        <ItemNodes>
            {shoppingItemNodes}
        </ItemNodes>
    )

}

export default ShoppingItemsList;