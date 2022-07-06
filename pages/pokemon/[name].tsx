import React, {useState} from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Pokemon } from '../../interface';
import {pokeApi} from '../../api';
import {Layout} from '../../components/Layout';
import { toggleFavorites, pokemonAll } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

    const [isInFavorites, setisInFavorites ] = useState(toggleFavorites.inFavorites(pokemon.id))

    const ToggleFavorites = () => {
     toggleFavorites.toggleFavorites(pokemon.id)
     setisInFavorites(!isInFavorites)
    
    if(!isInFavorites) return;

    confetti({
        zIndex:999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin:{
            x: 1,
            y: 0,
        }
    })
    }

    return(
        <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        
            <Grid xs={12} sm={4}>
               <Card>
                <Card.Body>
                    <Card.Image
                        src={pokemon.sprites.other?.dream_world.front_default || 'no-image'}
                    />
                </Card.Body>                
                </Card>
            </Grid>
        
        <Grid xs={12} sm={8}>
            <Card>
                <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Text h1 transform="capitalize">
                        {pokemon.name}
                    </Text>

                    <Button
                        color='gradient'
                        ghost = { !isInFavorites }   
                        onClick = {ToggleFavorites}
                    >
                        {!isInFavorites  ? 'En favoritos' : 'Guardar en favoritos'}
                    </Button>
                </Card.Header>

            <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction='row' display='flex' gap={0}>
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />

                    <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />

                    <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />

                    <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />
                </Container>
            </Card.Body>

            </Card>
        </Grid>

        </Grid.Container>
        </Layout>
    )

}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
     
 const {data} = await pokeApi.get('/pokemon?limit=151')    
 const namePokemon: string[] = data.results.map( (pokemon:Pokemon) => pokemon.name);

 return {
    paths: namePokemon.map( name => ({
       params: {name}
    })),
    fallback: 'blocking'
}  
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
const {name} = params as {name: string}
const pokemon = await pokemonAll(name);

 return {
    props: {
        pokemon
    },
    revalidate: 86400
} 
}

export default PokemonPage;