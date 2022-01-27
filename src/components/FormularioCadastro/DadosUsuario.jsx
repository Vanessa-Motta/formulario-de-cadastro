import { TextField, Button } from '@material-ui/core';
import React from 'react';

export default function FormularioCadastro({aoEnviar}) {
	return (
		<form
		onSubmit={(event) =>{
			event.preventDefault()
			aoEnviar()
		}}
		
		>
			<TextField required id="email" label="email" variant="outlined" margin='normal' fullWidth type="email" />
			<TextField required id="senha" label="senha" variant="outlined" margin='normal' fullWidth type="password" />
			<Button type="submit" variant="contained" color="primary" >Cadastrar</Button>
		</form>
	);
}

