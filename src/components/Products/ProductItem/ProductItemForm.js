import React, {useRef, useState} from 'react';
import Input from "../../UI/Input";
import styles from "./ProductItemForm.module.css";



const ProductItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmount = +amountInputRef.current.value;
        if (inputAmount.length === 0 || +inputAmount < 1 || +inputAmount > 10){
            setIsAmountValid(false)
            return;
        }

        props.onAddToCart(+inputAmount);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={'Количество'}
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>Добавить</button>
            {!isAmountValid && <p>Введите количество</p>}
        </form>
    );
};

export default ProductItemForm;