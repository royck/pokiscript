const { processEvolutionChain } = require('.././evolution/evolutionService');

describe('processEvolutionChain', () => {
  it('processes evolution chain data', () => {
    // Mocked evolution chain data
    const evolutionChain = {
      species: { name: 'bulbasaur' },
      evolves_to: [
        {
          species: { name: 'ivysaur' },
          evolves_to: [
            {
              species: { name: 'venusaur' },
              evolves_to: [],
            },
          ],
        },
      ],
    };


    const result = processEvolutionChain(evolutionChain);

    // Define the expected result
    const expectedResult = {
      name: 'bulbasaur',
      variations: [
        {
          name: 'ivysaur',
          variations: [
            {
              name: 'venusaur',
              variations: [],
            },
          ],
        },
      ],
    };


    expect(result).toEqual(expectedResult);
  });

  it('handles no evolution data', () => {
    // Mocked evolution chain data with no further evolutions
    const evolutionChain = {
      species: { name: 'charmander' },
      evolves_to: [],
    };

    const result = processEvolutionChain(evolutionChain);

    // Define the expected result
    const expectedResult = {
      name: 'charmander',
      variations: [],
    };

    expect(result).toEqual(expectedResult);
  });
});
