/**
 * The SideDrawer component.
 */
import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../ui/Backdrop/Backdrop';
import Empty from '../../../hoc/Empty/Empty';

/**
 * The SideDrawer component.
 * 
 * This component (stateless) is primarly for mobile devices.
 * 
 * We use some CSS conditional for showing animations.
 */
const sideDrawer = (props) => {
    // Starting styles
    let attachedClasses = [styles.SideDrawer];

    // Check for the 'shown'
    if( props.open ) {
        attachedClasses.push(styles.Open);
    } else {
        attachedClasses.push(styles.Close);
    }

    return (
        <Empty>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Empty>
    );
};

export default sideDrawer;