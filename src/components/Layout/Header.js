import React from "react";
import img from "../Resources/sushi.jpg";
import styles from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={styles.header}>
                    <h1>Доставка Еды</h1>
                    <CartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={img} alt={"Блюдо"}/>
            </div>
        </React.Fragment>
    )
}
export  default  Header;