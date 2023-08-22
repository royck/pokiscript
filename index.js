const { getPokemonSpecies, getEvolutionChain } = require('./src/api/apiService');
const { processEvolutionChain } = require('./src/evolution/evolutionService');

// This function processes the evolution chain data recursively
async function fetchEvolutionChain(pokemonName) {
  try {
    const speciesUrl = await getPokemonSpecies(pokemonName);
    
    const speciesResponse = await axios.get(speciesUrl);
    if (!speciesResponse.data.evolution_chain || !speciesResponse.data.evolution_chain.url) {
      throw new Error(`Evolution chain URL not found for ${pokemonName}`);
    }

    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    const evolutionChain = await getEvolutionChain(evolutionChainUrl);

    return processEvolutionChain(evolutionChain);
  } catch (error) {
    console.error("Fetch Evolution Chain Error:", error);
    throw new Error(`Error fetching data: ${error}`);
  }
}

// Get the Pokemon name from the command line arguments and fetch the evolution chain
const axios = require('axios');
const pokemonName = process.argv[2];
if (!pokemonName) {
  console.log('Usage: node index.js <pokemonName>');
} else {
  fetchEvolutionChain(pokemonName)
    .then(evolutionChain => {
      console.log(JSON.stringify(evolutionChain, null, 2));
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

module.exports = fetchEvolutionChain;