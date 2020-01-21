import React from 'react';
import Empty from '../../hoc/Empty/Empty';
import cssClasses from './Layout.module.css';
import Toolbar from '../navigation/Toolbar/Toolbar';
import SideDrawer from '../navigation/SideDrawer/SideDrawer';

/**
 * The Layout component.
 * 
 * This component was originaly stateless, but we switch into a stateful
 * one as we want to control the side menu show/hide property by clicking
 * the toolbar "show menu" button, or the backdrop component when the
 * menu is shown (we simply close the menu again).
 * 
 */
class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    /**
     * The handler for closing the side menu (SideDrawer).
     */
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    /**
     * The toggler for the side menu.
     * 
     * This function pass a function to the 'setstate' in order to
     * use the previous state (due to syncs).
     */
    sideDrawerToggler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: ! prevState.showSideDrawer }
        });
    };


    /**
     * Render the component.
     */
    render() {
        return (
            <Empty>
                <Toolbar open={this.state.showSideDrawer} onMenuToggle={this.sideDrawerToggler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <div className={cssClasses.Header}>SideDrawer, Backdrop.</div>
                <main className={cssClasses.Content}>
                    {this.props.children}
                </main>
            </Empty>
        );
    }
}

/**
 * Export
 */
export default Layout;