import products from "@/app/mock/products"
import ButtonAdd from "@/components/ButtonAdd"

function Product({params}) {
    
    return (
        <div>Este é o produto {params.slug}
            <img src={products.src} alt={products.alt}/>

            <div>
                <h1>{products.title}</h1>
                <p>{products.description}</p>
                <h3>{products.price}</h3>
                <ButtonAdd link='/cart/minhascompras'  text='Adicionar'/>
            </div>
            
        </div>
    )
}

export default Product