import React from 'react';
import Input from "../../UI/Input";
import styles from "./ProductItemForm.module.css";

const ProductItemForm = () => {
    return (
        <form className={styles.form}>
            <Input label={'Количество'} input={{
                id: 'amount',
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>Добавить</button>
        </form>
    );
};

export default ProductItemForm;