function Marcas (props) {

    return(
        <div>
            <p>Esse carro vermelho é da {props.carro1}</p>
            <p>Essa camisa preta é da {props.roupa}</p>
            <p>A {props.carro2}, ganhou mais um campeonato de construtores da {props.esporte}.</p>
        </div>
    )
}

export default Marcas