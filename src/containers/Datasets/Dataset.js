import React from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Dataset from '../../components/Dataset/Dataset';
import axios from '../../axios-instance';
import * as datasetActions from '../../store/datasetActions';
import Spinner from '../../components/ui/Spinner/Spinner';

/**
 * Dataset selection component.
 */
class Datasets extends React.Component {

    /**
     * Get the dataset listing from the server
     */
    componentDidMount() {
        this.props.onFetchDatasets();
    }

    /**
     * Rendering.
     */
    render() {
        // Show an spinner while loading
        let datasetsComponents = null;

        if (this.props.loading) {
            datasetsComponents = <Spinner />
        } else {
            // Generamos los pedidos
            datasetsComponents = this.props.datasets.map(dataset => (
                <Dataset
                    key={dataset.shortname}
                    shortname={dataset.shortname}
                    name={dataset.name}
                    disabled="" />
            ));
        }

        return (
            <div>
                <p>
                    Please select an available dataset for the simulation.
                </p>
                {datasetsComponents}
            </div>
        );
    }
}

/**
 * State to properties mapping.
 */
const mapStateToProps = state => {
    return {
        datasets: state.datasets,
        loading: state.loading
    }
}

/**
 * Dispatching functions to properties mapping.
 * 
 */
const mapDispatchToProps = dispatch => {
    return {
        onFetchDatasets: () => dispatch(datasetActions.fetchDatasets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Datasets, axios));