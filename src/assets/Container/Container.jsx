import './Container.css'
import Button from '../Button/Button'

const Container = ({subtitulo, inputinfo, termsService, link}) =>{
    return(
        <>
        <div>
        <h4>{subtitulo}</h4>
        <article>
           
            <input type="text" placeholder={inputinfo} />
            <input type="text"  />
            <input type="email"  />
            <input type="password" />
            <Button 
            nameButton={"CLAIM YOUR FREE TRIAL"}/>
            <p className="termsService">{termsService}
            <a href="#">{link}</a></p>
            </article>
        </div>
        </>
       
    )
}
 export default Container;