import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto, { CampoCor } from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from "uuid";

export const Formulario = ({ aoCadastrar, times }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time)
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Times'
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export const FomularioTime = ({ aoCadastrar, times }) => {
    const [nomeTime, setNomeTime] = useState('');
    const [corSecundaria, setCorSecundaria] = useState('');
    const [corPrimaria, setCorPrimaria] = useState('');
    const [time, setTime] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nomeTime,
            corPrimaria,
            corSecundaria,
            time)
        aoCadastrar({
            id: uuidv4(),
            nome: nomeTime,
            cor1: corPrimaria,
            cor2: corSecundaria
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para um novo time.</h2>
                <CampoTexto
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />
                <div style={{display: "flex", width:"100%", justifyContent: "space-between", padding: "0px 10px"}}>
                    <CampoCor
                        obrigatorio
                        label='Cor de Card'
                        placeholder='Escolha a cor dos colaboradores desse time '
                        valor={corSecundaria}
                        aoAlterado={valor => setCorSecundaria(valor)} />
                    <CampoCor
                        label='Cor de Time'
                        placeholder='Escolha a cor de fundo do seu time '
                        valor={corPrimaria}
                        aoAlterado={valor => setCorPrimaria(valor)} />
                </div>
                <Botao texto='Criar time' />
            </form>
        </section>
    )
}

// export default Formulario