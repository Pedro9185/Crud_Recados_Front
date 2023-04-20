import React from 'react';
import { Grid } from '@mui/material';
import TitlePage from '../../components/TitlePage';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

export const Favorites: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container>
        <Grid item>
          <TitlePage title="Favoritos" />
        </Grid>
      </Grid>
    </>
  );
};
