import React from 'react';
import styles from './ProductItem.module.css'


const ProductItem = (props) => {
    const formattedPrice = `$${props.price.toFixed(2)}`;
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

            </div>
        </li>
    );
};

export default ProductItem;