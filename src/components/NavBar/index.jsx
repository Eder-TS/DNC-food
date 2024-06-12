'use client'

import Image from 'next/image'
import Link from 'next/link'
import './style.css'

const links =[
    {
        id: 1,
        label: 'Variedades',
        link: '/categorias/variedades'
    },
    {
        id: 2,
        label: 'Lanches',
        link: '/categorias/lanches'
    },
    {
        id: 3,
        label: 'Pizzas',
        link: '/categorias/pizzas'
    },
    {
        id: 4,
        label: 'Doces',
        link: '/categorias/doces'
    },
    {
        id: 5,
        label: 'Promoções',
        link: '/categorias/promocoes'
    }
]

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='content'>
                <div>
                    <Image 
                        src="https://via.placeholder.com/200x100"
                        alt="Logotipo do e-commerce"
                        width={200}
                        height={100}
                    />
                </div>

                <div>
                    {links && links.map(link => <Link key={link.id} href={link.link}>{link.label}</Link>)}
                </div>
            </div>
            
            <div>
                <Link href='/cart/minhascompras'>Minhas Compras</Link>
            </div>
        </nav>
    )
}

export default NavBar