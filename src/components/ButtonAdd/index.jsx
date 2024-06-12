import stytles from './style.css'

function ButtonAdd({link, text}){
    return(
        <div className='button'>
            <a href={link}>
                <button>{text}</button>
            </a>
        </div>
    )
}
export default ButtonAdd