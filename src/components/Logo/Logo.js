/**
 * A logo component.
 */
import React from 'react';
import burgerLogo from '../../assets/images/logo192.png';
import styles from './Logo.module.css';

/**
 * The Logo component (stateless).
 * 
 * This logo receives its height from the upper component so it can fit
 * for the Toolbar or the SideDrawer.
 */
const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurgerBuilder"/>
    </div>
);

export default logo;