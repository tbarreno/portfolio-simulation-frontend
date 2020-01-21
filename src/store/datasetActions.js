/**
 * Action creators for getting the DataSet information from the backend.
 */
import * as actionTypes from './actionTypes';
import axios from '../axios-instance';

/**
 * Action when the datasets are successfuly retrieved.
 */
export const fetchDatasetSuccess = (datasets) => {
    return {
        type: actionTypes.FETCH_DATASET_SUCCESS,
        datasets: datasets
    }
}

/**
 * Action when the dataset retrieval has failed.
 */
export const fetchDatasetFail = (error) => {
    return {
        type: actionTypes.FETCH_DATASET_FAIL,
        error: error
    }
}

/**
 * Action for starting the connection.
 */
export const fetchDatasetStart = () => {
    return {
        type: actionTypes.FETCH_DATASET_START
    }
}

/**
 * Gets the dataset (async. fetch).
 */
export const fetchDatasets = () => {
    return dispatch => {
        // Starts
        dispatch(fetchDatasetStart());

        axios.get("/datasets")
            .then(res => {
                console.log("Getting the datasets:");
                console.log(res.data);

                if (res.data.status === "success") {
                    console.log("Data retrieval succeed.");

                    // Data loading
                    const fetchedData = [];
                    for (let key in res.data.data) {
                        // Expand every item
                        fetchedData.push({
                            id: key,
                            ...res.data.data[key]
                        });
                    }

                    // Data successfuly retrieved
                    dispatch(fetchDatasetSuccess(fetchedData));
                } else {
                    console.log("Error while getting the Datasets:");
                    console.log(res.data.message);
                    dispatch(fetchDatasetFail(res.data.message));
                }

            }).catch(err => {
                console.log("Error while getting the Datasets:");
                console.log(err);
                dispatch(fetchDatasetFail(err));
            });
    }
}