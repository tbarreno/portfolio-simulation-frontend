/**
 * The Toolbar component.
 */
import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerButton from '../../ui/HamburgerButton/HamburgerButton';

/**
 * The toolbar component (funcional - stateless).
 */
const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <div className={styles.MobileOnly}>
            <HamburgerButton clicked={props.onMenuToggle} menuOpened={props.open}/>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;