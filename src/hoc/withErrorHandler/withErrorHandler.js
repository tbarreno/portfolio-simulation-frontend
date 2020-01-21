/**
 * "High Order Component" for handling connection errors.
 */
import React from 'react';

import Modal from '../../components/ui/Modal/Modal';
import Empty from '../Empty/Empty';

/**
 * This component wraps any other component that uses 'axios' for
 * backend communication, showing a 'Modal' when an error is raised.
 */
const withErrorHandler = (WrappedComponent, axios) => {

    // This is a class factory...
    return class extends React.Component {
        /**
         * Constructor (state initialization)
         */
        constructor(props) {
            super(props);

            this.state = {
                error: null
            };

            // Axios interceptors for getting the error details
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
                console.log("[withErrorHandler] Exception catched on response:");
                console.log(error);
            });

            // Another interceptor for cleaning the error on a new request
            axios.interceptors.request.use(request => {
                // State reset
                this.setState({ error: null });
                return request;
            })

        }

        /**
         * A handler for managing the user 'ok' button on the modal.
         */
        errorConfirmedHandler() {
            // Clean the error state
            this.setState({ error: null });
        }

        /**
         * Rendering.
         */
        render() {
            let errorMessage = null;

            if (this.state.error) {
                errorMessage = this.state.error.message;
            }

            return (
                <Empty>
                    <Modal
                        show={this.state.error}
                        modalClosed={() => this.errorConfirmedHandler()}>
                        Backend error message: <em>{errorMessage}</em>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Empty>
            );
        }
    }
}

export default withErrorHandler;