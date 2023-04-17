import './CampoTexto.css'

const CampoTexto = (props) => {
  const modificaPlaceholder = `${props.placeholder}...`
  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input placeholder={modificaPlaceholder} />
    </div>
  )
}

export default CampoTexto;