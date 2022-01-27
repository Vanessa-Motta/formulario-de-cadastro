import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosDeEntrega() {
	return (
		<form>
		<TextField  id="cep" label="cep" variant="outlined" margin='normal' type="number" />
		<TextField  id="endereço" label="endereço" variant="outlined" margin='normal' type="text" fullWidth  />
		<TextField  id="numero" label="numero" variant="outlined" margin='normal' type="number" fullWidth />
		<TextField  id="cidade" label="cidade" variant="outlined" margin='normal' type="text" />
		<TextField  id="estado" label="estado" variant="outlined" margin='normal' type="text" />
		<Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
		</form>
	)
}