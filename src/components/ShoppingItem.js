const ShoppingItem = ({item, basketItems, setBasketItems}) => {
    
    const handleClick = () => {
        setBasketItems(item)
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
        <>
            <h2>{item.name}</h2>
            <h3>£{item.price}</h3>
            <button onClick={handleClick}> {checkItemsInBasket} to basket</button>
        </>
    )
}

export default ShoppingItem;