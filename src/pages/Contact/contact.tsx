import React from 'react';
import { Grid } from '@mui/material';
import TitlePage from '../../components/TitlePage';

export const Contact: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Contact" />
      </Grid>
    </Grid>
  );
};
