/**
 * Componente 'Spinner'.
 */
import React from 'react';
import style from './Spinner.module.css';

/**
 * Componente 'Spinner' para mostrar algo mientras se procesa el pedido.
 */
const spinner = () => (
    <div className={style.Loader}>Loading...</div>
);

export default spinner;