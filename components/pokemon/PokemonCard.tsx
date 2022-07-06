import {FC} from 'react'
import {useRouter} from 'next/router';
import { Card, Grid, Row } from '@nextui-org/react'; 
import { SmallPokemon } from '../../interface';

interface Props {
    pokemon: SmallPokemon    
}
 
export const PokemonCard: FC<Props> = ({pokemon}) => {
  
  const router = useRouter();

  const link = () => {
    router.push(`/pokemon/${pokemon.name}`)
  }

  return ( 
        <>
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card isHoverable
            onClick={ link }
            
            >
             <Card.Body css = {{p: 1}}>
              <Card.Image 
               src={pokemon.img}
               width= "100%"
               height={140}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <text>{pokemon.name}</text>
                <text>#{pokemon.id}</text>
              </Row>
            </Card.Footer>
            </Card>
          </Grid>
        </>
    );
}
 

