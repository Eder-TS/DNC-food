import products from "@/app/mock/products"
import Card from "@/components/Card"
import './style.css'

function CategoriaPage({params}) {
    return (
        <div className='categorias'>

            {products && products.map(product => 
                                        <Card key={product.id}
                                                id={product.id}  
                                                src={product.src}
                                                productLink={product.link}
                                                alt={product.alt} 
                                                title={product.title}
                                                buttonLink='/cart/minhascompras'
            />)}
        </div>
    )
}

export default CategoriaPage