import { Grid } from '@mui/material';
import React from 'react';
import GridContainerWelcome from './components/GridContainerWelcome';

interface WelcomeLayoutProps {
  children: React.ReactNode;
}

const WelcomeLayout: React.FC<WelcomeLayoutProps> = ({ children }) => {
  return (
    <GridContainerWelcome container alignItems="center">
      <Grid item xs={12}>
        {children}
      </Grid>
    </GridContainerWelcome>
  );
};

export default WelcomeLayout;
