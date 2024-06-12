import ButtonAdd from '@/components/ButtonAdd'
import './style.css'
function Card({id, src, alt, productLink, title, buttonLink}) {
    return (
        <div className='card'>
            <a className='imageLink' href={productLink+'#'+id}><img src={src} alt={alt}/></a>

            <a className='titleLink' href={productLink+'#'+id}>{title}</a>

            <ButtonAdd link={buttonLink} text='Adicionar'/>
        </div>
    )
}
    
export default Card