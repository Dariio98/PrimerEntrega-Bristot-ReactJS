import React from 'react';
import './estilos/main.css'
import { ItemList } from './ItemList';



export const  ItemListContainer = () => {

    const greeting = 'Equipa tu casa con los mejores precios'

    return (
        <>
        <div className='greetingContainer'>
            <h2>{greeting}</h2>

            <div className='containProducts'>
            <ItemList  />
            </div>
        </div>
        </>

    )

}
