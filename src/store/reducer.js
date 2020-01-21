/**
 * Session reducer (Redux).
 * 
 * This file contains the functions for updating the aplication
 * state.
 */

import produce from 'immer';

import * as actionTypes from './actionTypes';

/**
 * Initial state
 */
const initialState = {
    // Here we're going to save our current portfolio
    portfolio: [],

    // The available datasets
    datasets: [],

    // The symbol list
    symbols: [],

    // The result from the backend
    simulation: [],

    // The 'loading' state allows the redering components to show
    // a 'spinner' while we're waiting for the backend.
    loading: false,

    // This state is just for resetting the portfolio editor (when
    // the simulation is complete and we must back to a blank editor).
    simulationCompleted: false
};

/**
 * Main 'reducer'.
 * 
 * @param {*} state Current state.
 * @param {*} action The 'action' to perform.
 */
const reducer = (state = initialState, action) => {
    // Switch
    switch (action.type) {

        // Calling the backend to get the datasets
        case actionTypes.FETCH_DATASET_START:
            return produce(state, draftState => {
                draftState.loading = true;
            });

        // Something went wrong while getting the datasets
        case actionTypes.FETCH_DATASET_FAIL:
            // We must set the 'loading' to 'false': the error is
            // managed by the 'withErrorHandler' component.
            return produce(state, draftState => {
                draftState.loading = false;
            });

        // The backend request has finished
        case actionTypes.FETCH_DATASET_SUCCESS:
            return produce(state, draftState => {
                draftState.loading = false;
                draftState.datasets = action.datasets;
            });

        default:
            return state;
    }
}

export default reducer;