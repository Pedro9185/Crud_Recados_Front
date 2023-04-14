import { Grid, Typography } from '@mui/material';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import { useAppSelector } from '../../store/hooks';

export const Home: React.FC = () => {
  const contador = useAppSelector((state) => state.contador);
  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Home" />
        <Typography>{contador}</Typography>
      </Grid>
    </Grid>
  );
};
