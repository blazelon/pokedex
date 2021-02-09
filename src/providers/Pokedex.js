import React, { useState, useEffect, useContext, useReducer } from 'react'

import { Api } from '../services'
import { POKEMON_IMAGE_BASE_URL } from '../Constants'

const PokedexContext = React.createContext()

export const usePokedex = (props) => {
  return useContext(PokedexContext)
}

const initialState = {
  data: []
}

export const PokedexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchPokemonList = async () => {
    const response = await Api.fetchPokemonListData()

    if (response.ok) {
      dispatch({
        type: 'setData',
        payload: response.data
      })
    }

    return response
  }

  const fetchPokemon = id => (
    new Promise((resolve, reject) => {
      try {
        Api.fetchPokemonData(id)
          .then(response => {
            if (response.ok) {
              resolve(response.data)
            } else {
              reject()
            }
          })
      } catch (error) {
        reject(error)
      }
    })
  )

  return (
    <PokedexContext.Provider
      value={{
        fetchPokemonList,
        fetchPokemon,
        ...state
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setData':
      return {
        ...state,
        data: payload.results?.map((item, index) => ({
          ...item,
          id: index + 1,
          image: `${POKEMON_IMAGE_BASE_URL}${index + 1}.png`
        }))
      }
    default:
      throw new Error()
  }
}