// eslint-disable-next-line object-curly-newline
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import User from '../types/users';
import HeaderForm from './HeaderForm';

interface FormProps {
  mode: 'signin' | 'signup';
  textButton: string;
}

const Form: React.FC<FormProps> = ({ mode, textButton }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepassword, setErrorRepassword] = useState(false);
  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem('listaUsuarios') || '[]'));
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'signup') {
      const emailValid = (email.endsWith('.com') || email.endsWith('.com.br')) && email.includes('@');

      if (email.length > 0) {
        setErrorEmail(!emailValid);
      }

      const passwordValid = password.length >= 6;
      if (password.length > 0) {
        setErrorPassword(!passwordValid);
      }

      const repasswordValid = password === repassword;

      if (repassword.length > 0) {
        setErrorRepassword(!repasswordValid);
      }

      setDisabled(!(emailValid && passwordValid && repasswordValid));
    }
  }, [email, password, repassword, mode]);
  useEffect(() => {
    localStorage.setItem('listaUsuarios', JSON.stringify(users));
  }, [users]);

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (mode === 'signup') {
      const newUser = {
        email,
        password,
        tasks: [],
      };

      const retorno = users.some((value) => value.email === newUser.email);
      if (retorno) {
        alert('Email ja cadastrado');
        return;
      }
      // logica de cadastro
      setUsers([newUser, ...users]);

      setEmail('');
      setPassword('');
      setRepassword('');
      alert('Usuario cadastrado com sucesso');
    } else {
      const usuarioEncontrado = users.find((valor) => valor.email === email && valor.password === password);
      if (usuarioEncontrado) {
        navigate('/notes');
      } else {
        alert('email e senha incorretos ou não existem');
      }
      if (remember === true) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado?.email));
      } else {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado?.email));
      }
    }
  }

  return (
    <>
      <HeaderForm title="Login" icon={undefined} color="blue" />
      <Box component="form" marginTop={1} onSubmit={(ev) => handleSubmit(ev)}>
        <TextField
          error={errorEmail}
          helperText={errorEmail ? 'E-mail inválido' : ''}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          margin="normal"
          variant="outlined"
          type="email"
          required
          id="email"
          label="E-mail"
          fullWidth
        />
        <TextField
          error={errorPassword}
          helperText={errorPassword ? 'Senha deve conter ao menos 6 caracteres' : ''}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          margin="normal"
          variant="outlined"
          type="password"
          required
          id="password"
          label="Senha"
          fullWidth
        />

        {mode === 'signup' ? (
          <TextField
            error={errorRepassword}
            helperText={errorRepassword ? 'As senhas não coincidem' : ''}
            value={repassword}
            onChange={(ev) => setRepassword(ev.target.value)}
            margin="normal"
            variant="outlined"
            type="password"
            required
            id="repassword"
            label="Repetir Senha"
            fullWidth
          />
        ) : (
          <FormControlLabel
            // eslint-disable-next-line max-len
            control={<Checkbox checked={remember} onChange={(ev) => setRemember(ev.target.checked)} />}
            label="Permanecer conectado"
          />
        )}

        <Button disabled={disabled} type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
          {textButton}
        </Button>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            {mode === 'signin' ? (
              <Typography variant="body2">
                <Link style={{ color: 'inherit' }} to="/signup">
                  Não tem uma conta? Cadastre-se
                </Link>
              </Typography>
            ) : (
              <Typography variant="body2">
                <Link style={{ color: 'inherit' }} to="/">
                  Já possui conta? Vá para Login
                </Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
