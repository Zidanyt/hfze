import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'
const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [campeão, setCampeão] = useState('')
  const [imagem, setImagem] = useState('')
  const [rotas, setRotas ] = useState('')

  const aoSalva = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      campeão,
      imagem,
      rotas
    })
}

  return (
    <section className='formulario'>
        <form onSubmit={aoSalva}>
            <h2>Peencha os dados para entra na Guilda</h2>
            <CampoTexto
              valor={nome} 
              aoAlterado={valor => setNome(valor)}
              obrigatorio={true} 
              label="nome" 
              placeholder="Digite o seu Nome"/>

            <CampoTexto
              valor={campeão}
              aoAlterado={valor => setCampeão(valor)}
              obrigatorio={true}
              label="Campeão"
              placeholder="Digite o nome do Campeão"/>

            <CampoTexto 
              valor={imagem} 
              aoAlterado={valor => setImagem(valor)} 
              obrigatorio={true} 
              label="imagem" 
              placeholder="Digite o endereço da Imagem do seu Campeão"/>

            <ListaSuspensa 
              obrigatorio={true} 
              label="Times" 
              itens={props.times}
              valor={rotas}
              aoAlterado={valor => setRotas(valor)}
              />
            <Botao>
            Entra na Guilda
            </Botao>
        </form>
    </section>
  );
};

export default Formulario;