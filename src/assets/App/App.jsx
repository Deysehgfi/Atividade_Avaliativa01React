import './App.css'
import Container from '../Container/Container'
import Anuncio from '../Anuncio/Anuncio'





const App = () => {
    return (
    <>
    <main>
   
    <Anuncio
    titulo={"Learn to code by wacthing others"}
    descricao={"see how experience develops solve problems in real-time. Watching scripted tuturials id great, but understanding how develops think is inavluable. "}
    />
   
    
   
    <Container
        
        subtitulo={"Try it free  7 days then $20/mo. thereafter"}
        inputinfo={"Last Name"}
        termsService={"By click the button you are agreeing to our"}

        link="Terms and Services"
        
        />
    
    </main>
    
    
    </>
       

       
    )
}


export default App;