// This function processes the evolution chain data recursively
function processEvolutionChain(chain) {
    const result = {
      name: chain.species.name,
      variations: [],
    };
  
    // Check if there are further evolutions in the chain
    if (chain.evolves_to && chain.evolves_to.length > 0) {
      // Map over each evolution in the chain and recursively process them
      result.variations = chain.evolves_to.map(evolution => processEvolutionChain(evolution));
    }
  
    return result;
  }
  
  module.exports = {
    processEvolutionChain
  };
  