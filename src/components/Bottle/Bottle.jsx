import propTypes from 'prop-types'

import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    console.log(bottle);
    const { img, name, price} = bottle;
    return (
        <div className="bottleCss grid grid-cols-3">
            <h3>Bottle name: {name}</h3>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={()=>handleAddToCart(bottle)} className=''>purches</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: propTypes.object.isRequired,
    handleAddToCart: propTypes.func.isRequired

}

export default Bottle;