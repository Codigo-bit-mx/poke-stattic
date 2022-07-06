import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react'; 
import { PokemonCard } from '../components/pokemon';
import {PokemonListResponse, SmallPokemon} from '../interface/index'
import { Button } from '@nextui-org/react';
import { Layout } from '../components/Layout'
import { pokeApi } from '../api'
import { pokemonAll } from '../utils';

interface Props {
  pokemons: SmallPokemon;
}

const Home: NextPage<Props> = ({pokemons}) => {

  return (
  
    <Layout title="Listado de pokemon"> 

    <Grid.Container gap={2} justify='flex-start'>
      { 
        Array.isArray(pokemons) ? (
          pokemons.map((pokemon:SmallPokemon) => (
            <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            />
           ))
        ): null
      }    
    </Grid.Container>
    
    </Layout>
      
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
  id: i + 1, 
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  name: poke.name,
  url: poke.url
}))

 
return {
    props: {
       pokemons
    }
  }
}
  

export default Home
