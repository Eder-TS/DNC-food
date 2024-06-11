import produtos from "@/app/mock/produtos"
import Card from "@/components/Card"
import './style.css'

function CategoriaPage({params}) {
    return (
        <div className='categorias'>

            {produtos && produtos.map(produto => 
                                        <Card key={produto.id}  src={produto.src} alt={produto.alt} title={produto.title}/>)}
        </div>
    )
}

export default CategoriaPage