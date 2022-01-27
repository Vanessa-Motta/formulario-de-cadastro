import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


export default function DadosPessoais({aoEnviar, validarCPF}) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState("true");
  const [news, setNews] = useState("false");
  const [erros, setErros] = useState({ cpf:{valido: true, texto: "" }})

  return (
    <form onSubmit={(event) => { event.preventDefault(); aoEnviar({ cpf, name, lastname, news, promotions }); }}>
      <TextField value={name} onChange={(event) => setName(event.target.value)} id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
      <TextField value={lastname} onChange={(event) => setLastName(event.target.value)} id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth />
      <FormControlLabel checked={promotions} label="Promoções" control={<Switch onChange={(event) => setPromotions(event.target.checked)} name="promocoes" color="primary" />} />
      <FormControlLabel checked={news} label="Novidades" control={<Switch onChange={(event) => setNews(event.target.checked)} name="news" color="primary" />} />
      <Button type="submit" variant="contained" color="primary">Cadastrar </Button>
    </form>





  );
}

