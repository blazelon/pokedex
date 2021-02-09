import { create } from 'apisauce'

import { BASE_URL } from '../config'

export const URIS = {
  POKEMONS: 'pokemon?limit=151',
  POKEMON: id => `pokemon/${id}`
}

const createApiClient = (baseURL = BASE_URL) => {
  const api = create({
    baseURL,
    timeout: 15000
  })

  const setHeaders = (params) => {
    for (const key in params) {
      api.setHeader(key, params[key])
    }
  }

  // kickoff our api functions
  return {
    // client modifiers
    setHeaders,
    fetchPokemonListData: () => api.get(URIS.POKEMONS),
    fetchPokemonData: id => api.get(URIS.POKEMON(id)),
  }
}

export default createApiClient()