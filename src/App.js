import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Datasets from './containers/Datasets/Dataset';
import Portfolio from './containers/Portfolio/Portfolio';

/**
 * Root component for the application.
 * 
 */
class App extends React.Component {

  /**
   * Rendering.
   */
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/datasets" component={Datasets} />
            <Route path="/portfolio" component={Portfolio} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
