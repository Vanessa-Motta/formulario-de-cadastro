import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario'
import DadosDeEntrega from './DadosDeEntrega';


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaatual, setEtapaAtual] = useState(0);

  const fomularioAtual = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosDeEntrega aoEnviar={aoEnviar} />
  ];

  function proximo() {
    setEtapaAtual(etapaatual + 1)
  }

  return (
    <>
      {fomularioAtual[etapaatual]}
    </>
  );
}
export default FormularioCadastro;