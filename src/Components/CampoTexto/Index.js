import './CampoTexto.css'

const CampoTexto = (props) => {
  const modificaPlaceholder = `${props.placeholder}...`

  // let valor = ""

  const aoDigita = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigita} required={props.obrigatorio} placeholder={modificaPlaceholder} />
    </div>
  )
}

export default CampoTexto;