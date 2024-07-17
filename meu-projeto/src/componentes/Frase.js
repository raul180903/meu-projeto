import estilo from './Frase.module.css'

function Frase () {
    return(
        <div>
            <h2 className={estilo.estiloFrase}>Usando o CSS</h2>
            <h2 className={estilo.estiloFrase2}>Testando CSS 2</h2>
        </div>
    )
}

export default Frase