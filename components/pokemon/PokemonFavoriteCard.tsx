import React, {FC} from 'react';
import {useRouter} from 'next/router';
import { Grid, Card } from '@nextui-org/react';

interface Props {
    pokemonId: Number
}

export const FavoritePokemonCard: FC<Props> = ({pokemonId}) => {

    const router = useRouter();

    const clickPokemon = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
     <Grid xs={12} sm={4} >
        <Card  css={{ padding: 10 }}  >
        <Card.Body>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                onClick={clickPokemon}
            />
        </Card.Body>                
        </Card>
     </Grid>

    )

} 