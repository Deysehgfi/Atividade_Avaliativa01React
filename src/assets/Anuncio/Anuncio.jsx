import './Anuncio.css'

const Anuncio  = ({titulo, descricao}) => {
    return ( 
        <>
        <div className='Anuncio'>
        <h1>{titulo}</h1>
        <p>{descricao}</p> 
        </div>
        
        </>
       
    )
}


export default Anuncio;