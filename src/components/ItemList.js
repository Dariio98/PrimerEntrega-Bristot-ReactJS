import React, { useEffect, useState } from "react";
import "./estilos/itemList.css";

export const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./stock.json')
            .then(resp =>resp.json())
            .then(data => console.log(data))
            .catch((e) => console.log(e))
    }, []);
    return (
        <>
        {
            products.map((product) => (<div key= {product.id} className="cardProducts">
                <img className="cardProducts-img" src={product.img} alt={product.nombre} />
                <h2 className="cardProducts-text">{product.nombre}</h2>
                <p>{product.precio}</p>        
            </div>
            ))
        }
        </>
        
    )
}