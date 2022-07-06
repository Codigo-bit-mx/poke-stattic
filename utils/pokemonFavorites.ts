

const toggleFavorites = ( id : number ) => {

    let arrayFavorites: number [] = JSON.parse(localStorage.getItem('favorites') || '[]' );

    if (arrayFavorites.includes(id)){
        arrayFavorites = arrayFavorites.filter( pokeId => pokeId !== id )
    }else{
        arrayFavorites.push(id)
    }

    localStorage.setItem('favorites',JSON.stringify(arrayFavorites));
}

const inFavorites = ( id: number ): boolean => {

    if (typeof window === 'undefined') return false

    const arrayFavorites: number[] = JSON.parse(localStorage.getItem('favorites ') || '[]' ); 
     
    return arrayFavorites.includes(id)
}

const pokemon = () => { 
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}


export default {
    toggleFavorites,
    inFavorites,
    pokemon
}