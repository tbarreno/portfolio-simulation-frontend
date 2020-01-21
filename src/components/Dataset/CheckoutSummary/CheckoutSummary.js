import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../ui/Button/Button';
import './CheckoutSummary.css';

/**
 * Componente para el resumen del pedido.
 * 
 * Mostramos una previsualización de la hamburguesa. Para esto, creamos
 * un estilo 'BurgerPreview' para forzar un tamaño más pequeño que en
 * el editor (300x300 px).
 * 
 * Los ingredientes vienen en las propiedades.
 * 
 * También mostramos dos botones y los asociamos con los métodos que
 * vengan como propiedades (este componente sólo es para visualizar y el
 * que tiene la lógica es el superior que sabe lo que tiene que hacer).
 */
const checkoutSummary = (props) => {
    return(
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div className="BurgerPreview">
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button type="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button type="Success" clicked={props.onCheckoutCofirmed}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;