
# Poki - Pokemon Evolution Finder

![pokiapi logo](https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png)

Poki is a Pokemon evolution finder that helps you discover the evolutions of your favorite Pokemon species. With Poki, you can easily explore the evolution chains and learn about the transformations that your beloved Pokemon can undergo.

## Features

- Discover the evolution chain of any Pokemon species.
- Learn about the stages of evolution and the conditions required for evolution.
- Explore different evolution paths and potential branching evolutions.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone this repository or download the ZIP file.

    ```bash
    git clone https://github.com/royck/pokiscript.git
    ```


2. Open your terminal and navigate to the project directory.

    ```bash
    cd pokiscript
    ```

3. Install the project dependencies using npm.

    ```bash
    npm install
    ```

## Usage

1. After installing the dependencies, you can use the following command to run the script and find the evolution chain of a Pokémon. Replace `<pokemonName>` with the name of the Pokémon you want to search for.

    ```bash
    npm start <pokemonName>
    ```

    For example, to find the evolution chain of Bulbasaur:

    ```bash
    npm start bulbasaur
    ```

2. The result will be displayed in the terminal.

## Running Tests

This project uses [Jest](https://jestjs.io/) for testing. To run the tests, use the following command:

```bash
npm test
