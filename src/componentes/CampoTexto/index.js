import './campo-texto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto'>
        <label>{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export const CampoCor = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto' style={{padding: 20}}>
        <label >{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder} type="color"/> 
    </div>)
}

export default CampoTexto