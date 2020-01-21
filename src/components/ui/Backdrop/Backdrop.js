/**
 * The Backdrop component.
 */
import React from 'react';
import styles from './Backdrop.module.css';

/**
 * The Backdrop component (stateless).
 * 
 * It just return a 'styling DIV' if the 'show' property is present.
 */
const backdrop = (props) => (
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;