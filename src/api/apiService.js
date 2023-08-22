const axios = require('axios');


// Function to fetch species data using Pokemon name
async function getPokemonSpecies(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data.species.url;
  } catch (error) {
    throw new Error(`Error fetching Pokemon species: ${error}`);
  }
}

// Function to fetch evolution chain data using species URL
async function getEvolutionChain(evolutionChainUrl) {
  try {
    const response = await axios.get(evolutionChainUrl);
    return response.data.chain;
  } catch (error) {
    throw new Error(`Error fetching evolution chain: ${error}`);
  }
}

module.exports = {
  getPokemonSpecies,
  getEvolutionChain
};
