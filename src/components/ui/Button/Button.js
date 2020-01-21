import React from 'react';

import styles from './Button.module.css';

/**
 * A simple button component (reusable stateless).
 */
const button = (props) => (
    <button
        disabled={props.disabled}
        className={[styles.Button, styles[props.type]].join(" ")}
        onClick={props.clicked}>{props.children}</button>
);

export default button;