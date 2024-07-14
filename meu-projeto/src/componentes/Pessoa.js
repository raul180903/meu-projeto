function Pessoa({nome, idade, profissão, foto}) {
    return(
        <div>
            <img src={foto} alt={nome} />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissão}</p>
        </div>
    )
}

export default Pessoa