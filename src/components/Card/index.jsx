import './style.css'
function Card({src, alt, title}) {
    return (
        <div className='card'>
            <img src={src} alt={alt} />
            {title}
        </div>
    )
}
    
export default Card