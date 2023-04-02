import React from 'react';
import styles from './ProductItem.module.css'
import ProductItemForm from "./ProductItemForm";
import {useContext} from "react";
import CartContext from "../../../Store/cart-context";


const ProductItem = (props) => {

    const cartContext = useContext(CartContext);

    const formattedPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li className={styles.product}>
            <h3 >
                {props.name}
            </h3>
            <div className={styles.price}>
                {props.description}
            </div>
            <div className={styles.description}>
                {formattedPrice}
            </div>
            <div>
                <ProductItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default ProductItem;