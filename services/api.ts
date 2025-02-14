interface Pokemon {
  name: string;
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

export const fetchPokemonList = async (limit: number = 20, offset: number = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results;
}

export const fetchPokemonDetails = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

export const fetchPokemonListWithDetails = async (limit: number = 20, offset: number = 0) => {
  const pokemonList = await fetchPokemonList(limit, offset);
  const detailedPokemon = await Promise.all(
    pokemonList.map(async (pokemon: Pokemon, index: number) => {
      const details = await fetchPokemonDetails(index + 1);
      return {
        ...pokemon,
        id: index + 1,
        types: details.types.map((t: PokemonType) => t.type.name),
      };
    })
  );
  return detailedPokemon;
}