import Head from 'next/head';
import { FC } from 'react'
import {Navbar} from '../ui/index'


interface Props {
    title?:string,
    children: any
}


export const Layout: FC<Props> = ({children, title }) => {
    return (
        <>
        <Head>
        <title>{ title || 'Pokemon app'}</title>
        <meta name="autor" content="Ossmar Gonzalez"/>
        <meta name="description" content="informacion sobre el pokemon n" />
        <meta name= "keywords" content="xxx., pokemon, pokedex"/>
        </Head>

        <Navbar />
        
        <main style = {{
            padding: '0 20px'
        }} >
            {children}
        </main>
        </>
    )
}