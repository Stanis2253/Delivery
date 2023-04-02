import React from 'react';
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

const Products = [
    {
        id: "m1",
        name: 'Ролл "Наоми"',
        description:
            "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Спайс в лососе",
        description: "Рис, лосось, соус спайс",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Суши с угрем",
        description: "Угорь копченый, соус унаги, кунжут",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Салат "Поке с лососем"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 7.99,
    },
]

const ProductList = () => {
    const productsList = Products.map(p => <ProductItem key={p.id} name={p.name} description ={p.description} price={p.price}/>)
        return (

        <section className={styles.product}>
            <Card>
                <ul>
                    {productsList}
                </ul>
            </Card>
        </section>
    );
};

export default ProductList;