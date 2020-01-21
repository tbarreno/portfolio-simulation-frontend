/**
 * A Modal component for the ordering summary.
 */
import React from 'react';
import css from './Modal.module.css';
import Empty from '../../../hoc/Empty/Empty';
import Backdrop from '../Backdrop/Backdrop';

/**
 * The Modal component.
 * 
 * It contains an example of inline styles (they must be enclosed with
 * double curly braces).
 * 
 * I've converted to a Class component as we need to implement the
 * "shouldComponentUpdate" method: we need to control that the content is only
 * redered when the modal is shown.
 */
class Modal extends React.Component {

    /**
     * This methods only allows the component to render when it's shown.
     */
    shouldComponentUpdate(nextProps, nextState) {
        // 'true' if the "show" is different or a children component has changed
        // its properties (this is the case for the 'loading' spinner)
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children);
    }

    /**
     * Render method.
     */
    render() {
        return (
            <Empty>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={css.Modal}>
                    {this.props.children}
                </div>
            </Empty>
        );
    }
}

export default Modal;