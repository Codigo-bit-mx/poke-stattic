import React, {FC} from 'react';
import { Grid } from '@nextui-org/react';
import {FavoritePokemonCard} from './'
interface Props{
    pokemon: Number[];
}

export const FavoritePokemon: FC<Props> = ({pokemon}) => {

return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {pokemon.map(id => (
         <FavoritePokemonCard 
         key={`${id}`}
         pokemonId={id}
         />   
     ))}
     
   </Grid.Container>

)

}