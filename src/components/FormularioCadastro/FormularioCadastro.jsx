import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


export default function FormularioCadastro() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  return (
    <form onSubmit={(event) => { event.preventDefault(); console.log(name, lastname); }}>
      <TextField value={name} onChange={(event) => setName(event.target.value)} id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
      <TextField valee={lastname} onChange={(event) => setLastName(event.target.value)} id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />


      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

