import React from 'react';
import NextLink from 'next/link';
import {Spacer, Text, useTheme, Link} from '@nextui-org/react';
import Image from 'next/image'


export const Navbar = () => {

    const { theme } = useTheme()
    
    return (
        <div style = {{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray400.value
        }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" 
            alt="imagen de la app"
            width={70}
            height={70}

        />
        <NextLink href='/' passHref>
            <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemón</Text>
            </Link>
        </NextLink>
        
        <Spacer css={{flex: 1}}/>

        <NextLink href='/favorites'>
        <Link>
        <Text color='white' h3>Favoritos</Text>
        </Link>
        </NextLink>

        </div>
    )
}