import propTypes from 'prop-types'


import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
               <h4>cart : {cart.length}</h4>
               <div className="cart-container">
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
                }
               </div>
        </div>
    );
};
Cart.propTypes ={
    cart: propTypes.array.isRequired
}

export default Cart;