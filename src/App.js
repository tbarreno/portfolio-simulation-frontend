import React from 'react';

import Button from '@material-ui/core/Button';
import Layout from './components/Layout/Layout';
import './App.css';

/**
 * Root component for the application.
 */
function App() {
  return (
    <div className="App">
      <Layout>
        <Button variant="contained" color="primary">
          Start the application
      </Button>
        <p>This is the main view.</p>
      </Layout>
    </div>
  );
}

export default App;
