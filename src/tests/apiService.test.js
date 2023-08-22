const axios = require('axios');
const { getPokemonSpecies, getEvolutionChain } = require('.././api/apiService');

jest.mock('axios');

// Test suite for the getPokemonSpecies function
describe('getPokemonSpecies', () => {
  it('fetches species URL for a Pokémon', async () => {
    // Mocked data and values for testing
    const pokemonName = 'bulbasaur';
    const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/1/';
    axios.get.mockResolvedValueOnce({ data: { species: { url: speciesUrl } } });

    const result = await getPokemonSpecies(pokemonName);
    expect(result).toBe(speciesUrl);
  });

  // Test case: handles fetching error and throws an error
  it('handles fetching error', async () => {
    const errorMessage = 'Error fetching species';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));
    await expect(getPokemonSpecies('bulbasaur')).rejects.toThrow(errorMessage);
  });
});

// Test suite for the getEvolutionChain function
describe('getEvolutionChain', () => {
  it('fetches evolution chain data using URL', async () => {
    // Mocked data and values for testing
    const evolutionChainUrl = 'https://pokeapi.co/api/v2/evolution-chain/1/';
    const evolutionChainData = { chain: { species: { name: 'bulbasaur' }, evolves_to: [] } };
    axios.get.mockResolvedValueOnce({ data: evolutionChainData });

    const result = await getEvolutionChain(evolutionChainUrl);
    expect(result).toEqual(evolutionChainData.chain);
  });

  // Test case: handles fetching error and throws an error
  it('handles fetching error', async () => {
    const errorMessage = 'Error fetching evolution chain';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getEvolutionChain('https://pokeapi.co/api/v2/evolution-chain/1/')).rejects.toThrow(errorMessage);
  });
});
