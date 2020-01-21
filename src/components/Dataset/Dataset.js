import React from 'react';

import Button from '../ui/Button/Button';
import styles from './Dataset.module.css';

/**
 * A simple dataset component.
 * 
 * This will be a "card" with a button.
 */
const dataset = (props) => {

    /**
     * Rendering.
     */
    return (
        <div className={styles.Dataset}>
            <p><strong>{props.shortname}</strong></p>
            <p>{props.name}</p>
            <Button
                type="Success"
                disabled={props.disabled}>Select this dataset</Button>
        </div>
    )
};

export default dataset;