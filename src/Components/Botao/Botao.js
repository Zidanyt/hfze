import './Botao.css'

const Botao = (props) => {
  return (
    <button className='botao'>{props.children}</button> 
    // para poder bota imagens iconas ...
  )
}

export default Botao