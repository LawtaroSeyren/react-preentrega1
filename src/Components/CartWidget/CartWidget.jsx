import './CartWidget.css'
import iconCart from '../../Images/iconCart.png'

const CartWidget = () => {


    return (
        <>
            <img src={iconCart} className="cart" />
            <strong>5</strong>
        </>
    )
}

export default CartWidget