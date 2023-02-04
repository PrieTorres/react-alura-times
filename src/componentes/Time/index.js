import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, deleteColaborador, changeColor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <div className='config-box'>
                <input
                    onChange={e => { 
                        changeColor(time.id, e.target.value, "corSecundaria");
                    }}
                    value={time.corSecundaria}
                    type="color"
                    className="color-receptor"
                />
                <input
                    onChange={e => changeColor(time.id, e.target.value, "corPrimaria")}
                    value={time.corPrimaria}
                    type="color"
                    className="color-receptor"
                />
            </div>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} deleteColaborador={() => { deleteColaborador(colaborador.id, colaborador.timeId) }} />)}
            </div>
        </section>

    )
}

export default Time