import Colaborador from '../Colaboragor/Colaborador'
import './Times.css'

const Times = (props) => {
  return (
    <section className='time' style={{
      backgroundColor: props.corPrimaria,
    }}>
        <h4 style={{
      borderColor: props.corSecundario,
    }}>{props.nome}</h4>
    <Colaborador />
    </section>
  )
}

export default Times