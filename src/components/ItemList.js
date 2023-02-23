import React from "react";
import "./estilos/itemList.css";
import stock from "./stock";

export const ItemList = () => {
    console.log(stock.products);
    return (
        <>

        {
            stock.products.map((product) => (<div key= {product.id} className="cardProducts">
                <img className="cardProducts-img" src={product.img} alt={product.nombre} />
                <h2 className="cardProducts-text">{product.nombre}</h2>
                <p>{product.precio}</p>        
            </div>
            ))
        }
        </>
        
    )
}