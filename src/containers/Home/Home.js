import React from 'react';

import Button from '../../components/ui/Button/Button';
import styles from './Home.module.css';

/**
 * The home page component.
 */
class Home extends React.Component {
    /**
     * Handler for the 'select dataset' button.
     */
    onContinueHandler = () => {
        this.props.history.push("/datasets");
    }

     /**
      * Rendering.
      */
    render() {
        return (
            <div className={styles.Home}>
                <p><b>Welcome</b></p>
                <p>This is a example application for building a complete
                    application: a <b>JavaScript</b>+<a href="https://reactjs.org/">ReactJS </a>
                    frontend and a <b>Python</b>+<a href="https://www.palletsprojects.com/p/flask/">Flask </a>
                    backend.
                </p>
                <p>This project is still under development.</p>
                <Button
                    type="Success"
                    clicked={this.onContinueHandler}>Continue to Dataset selection</Button>
            </div>
        );
    }
}

export default Home