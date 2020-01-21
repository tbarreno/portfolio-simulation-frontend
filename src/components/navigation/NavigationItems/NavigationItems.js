import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

/**
 * Navigation Items component.
 * 
 * It defines the top bar navigation links (to the main application pages).
 */
const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/datasets">Datasets</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio simulation</NavigationItem>
    </ul>
);

export default navigationItems;