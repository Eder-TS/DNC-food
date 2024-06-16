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

                <div className='menu text'>
                    {links && links.map(link => <Link key={link.id} href={link.link}>{link.label}</Link>)}
                </div>
            </div>
            
            <div className='menu-cart text'>
                <Link href='/cart/minhascompras'>
                    <div>Minhas Compras</div>
                    <Image 
                        src="https://via.placeholder.com/81x57"
                        alt="Carrinho de compras"
                        width={81}
                        height={57}
                    />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar