import React from 'react';
import styles from './HamburgerButton.module.css';

/**
 * The 'hamburger' button component for showing the sidedrawer.
 */
const hamburgerButton = (props) => {
    const styleList = [styles.hamburger, styles["hamburger--spring"]];
    
    if( props.menuOpened ) {
        styleList.push(styles["is-active"]);
    }

    return(
    <button className={styleList.join(" ")} type="button" onClick={props.clicked}>
        <span className={styles["hamburger-box"]}>
            <span className={styles["hamburger-inner"]}></span>
        </span>
    </button>
    )
};

export default hamburgerButton;