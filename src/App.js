// roda no cell "npm run openmobile" conferi no packge.json

import { useState } from 'react';
import { Banner } from './Components/Banner/Banner';
import Formulario from './Components/Formulario/Formulario';
import Times from './Components/Times/Times';

function App() {

  const times = [{
    nome: 'HFZE',
    corPrimaria: '#d9f7e9',
    corSecundario: '#57c200',
  },
  {
    nome: 'Outras',
    corPrimaria: '#d9f7',
    corSecundario: '#57c2',
  },
]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

    {times.map(time => <Times key={time.nome} nome={time.nome} 
    corPrimaria={time.corPrimaria} 
    corSecundario={time.corSecundario}
    /> )}  
    
    </div>
  );
}

export default App;
