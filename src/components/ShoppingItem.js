import { useContext } from "react"
import styled from "styled-components"
import ShoppingItemsContext from "../context/ShoppingItemsContext"

const Header = styled.h2`
    font-size: 2em;
`
const Container = styled.div`
    background-color: lightsalmon;
    color: #fff;
    border: 2px solid darkorange;
    border-radius: 5px;
    padding: 0.5em;
    margin: 1em;
    flex: 33%;
`

const Button = styled.button`
    font-size: 1em;
    padding: 1em;
    margin: 0.5em;
    border: 2px solid darkorange;
    background: #fff;
    color: darkorange;
    border-radius: 5px;
    &:hover {
        background-color:darkorange;
        color: #fff;
        border: 2px solid #fff;
    }
`

const ShoppingItem = ({item}) => {
    
    const {addBasketItem, basketItems} = useContext(ShoppingItemsContext)

    const handleClick = () => {
        addBasketItem(item)
    }

    const checkItemsInBasket = () => {
        const itemInBasket = basketItems.includes(item);
        if (itemInBasket){
            return "Remove from"
        }else {
            return "Add to"
        }
    }

    return (
        <Container>
            <Header>{item.name}</Header>
            <h3>£{item.price}</h3>
            <Button onClick={handleClick}> {checkItemsInBasket()} basket</Button>
        </Container>
    )
}

export default ShoppingItem;