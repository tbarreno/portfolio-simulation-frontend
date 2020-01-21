
# Portfolio Simulation Frontend

This is the frontend project for a "stock portfolio simulator".

It's a web *Single Page Application* built with **ReactJS** that allows the
user to select a dataset from the available list at the server, and setup a
stock portfolio (symbols and quantities).

Once a portfolio is ready, it can be sent to the backend and it will return the
portfolio performance to be displayed.

*This project is still in heavy development state.*

## Project structrure

The application has tree pages:

- Home: Just a welcome message
- Dataset: The dataset selection
- Portfolio: The portfolio editor and simulation result page

## Installation

**Node.js** and a package manager (`npm` or `yarn`) is required to build
this project.

You can install all dependencies with:

```sh
npm install
```

And build the complete application with:

```sh
npm build
```

The Docker container will be build with:

```sh
docker image build -t portfolio_simulator_fe:1.0 .
```
