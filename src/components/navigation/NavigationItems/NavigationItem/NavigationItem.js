/**
 * Componente de enlace de navegación.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';
// import './NavigationItem.css';

/**
 * Un simple enlace de la barra de navegación.
 * 
 * Anteriormente, establecíamos el estilo manualmente, pero como lo hemos
 * migrado a enrutado (con 'NavLink'), ya lo dejamos para que funcione
 * por su cuenta.
 * 
 * Un detalle sobre los estilos activos: por alguna razón no funciona lo
 * de llamar al CSS 'x.module.css' y hacer un 'import' tipo módulo; no
 * funciona no de los enlaces activos (supongo que por los nombres, porque
 * cuando va como módulo se generan nombres "generados" y el NavLink
 * establece el 'active' tal cual que puede que no exista con ese nombre).
 * 
 * En todo caso, para que funcione hay que hacerlo en CSS típico.
 */

 /*
const navigationItem = (props) => (
    <li className="NavigationItem">
        <NavLink to={props.link} exact>
            {props.children}
        </NavLink>
    </li>
);
*/

/**
 * Corrección: la implementación anterior funciona perfectamente, pero
 * si queremos utilizar los "CSS modules" (con sus nombres autogenerados),
 * lo que hacemos es especificarle al NavLink el nombre de la clase activa.
 * 
 * Y con eso, funciona perfectamente (volvemos a llamar al CSS
 * 'x.module.css').
 */
const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <NavLink to={props.link} activeClassName={styles.active} exact>
            {props.children}
        </NavLink>
    </li>
);

/*
        <a
            href={props.link}>
            className={props.active ? styles.active : null}>
            {props.children}
*/

export default navigationItem;