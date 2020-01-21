import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './Layout.css';

/**
 * Main application layout.
 * 
 * This component structures the application: sets the navigation bar
 * on the top and the content on the center of the screen.
 */
const layout = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default layout;