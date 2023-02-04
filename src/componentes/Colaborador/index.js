import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, deleteColaborador }) => {
    return (<div className="colaborador">
        <div className='delete-box'>
            <button className="delete-button" onClick={deleteColaborador}>X</button>
        </div>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador