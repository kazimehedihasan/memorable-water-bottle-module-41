const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const saveCartToLs = cart =>{
    const cartStringified= JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLst = id =>{
    const cart = getStoredCart();
    cart.push(id)
// save to localStorage
saveCartToLs(cart);
}
export { addToLst, getStoredCart}