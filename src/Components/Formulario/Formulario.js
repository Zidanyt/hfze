import CampoTexto from '../CampoTexto/Index'
import './Formulario.css'
const Formulario = () => {
  return (
    <section className='formulario'>
        <form>
            <h2>Peencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="nome" placeholder="Digite o seu Nome"/>
            <CampoTexto label="cargo" placeholder="Digite seu Cargo"/>
            <CampoTexto label="imagem" placeholder="Digite o endereço da Imagem"/>
        </form>
    </section>
  );
};

export default Formulario;