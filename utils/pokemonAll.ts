import React from 'react';
import {Pokemon} from '../interface/index'
import {pokeApi} from '../api/index'

interface Props {
    pokemon: Pokemon
}


export const pokemonAll = async (name: String) => {

    try {
        const {data} = await pokeApi.get(`/pokemon/${name}`)

        return {
            id: data.id, 
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        return null
    }

}


