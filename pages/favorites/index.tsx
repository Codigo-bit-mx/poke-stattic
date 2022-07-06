import React, {useState, useEffect, FC} from 'react';
import {Layout} from '../../components/Layout'
import { FavoritePokemon } from '../../components/pokemon'
import {NoFavorites} from '../../components/ui';
import {toggleFavorites} from '../../utils'
 
const Favorites: FC = () => {

    const [ favoritesPokemon, setFavoritesPokemon ] = useState<number[]>([])

    useEffect(() => {
        setFavoritesPokemon(toggleFavorites.pokemon())
    }, [])

    return ( 
        <Layout title="Pokemons - Favoritos">

        { favoritesPokemon.length === 0
         ? ( <NoFavorites />) 
         : ( <FavoritePokemon
                pokemon={favoritesPokemon}
            />)
         }

        </Layout>
     );
}
 
export default Favorites;