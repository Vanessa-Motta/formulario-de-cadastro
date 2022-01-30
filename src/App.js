import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core"
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesDeCadastro from "./contexts/ValidacoesDeCadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesDeCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>

        </ValidacoesDeCadastro.Provider>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}


export default App;
