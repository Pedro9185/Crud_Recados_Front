import { LockOpenOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';

import Form from '../../components/Form';
import HeaderForm from '../../components/HeaderForm';

const SignIn: React.FC = () => {
  return (
    <Grid
      container
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      bgcolor="ButtonShadow"
    >
      <Grid item xs={12} sm={8} md={5} sx={{ borderRadius: '25px', backgroundColor: '#fff' }}>
        <Box component="section" marginY={8} marginX={4} display="flex" flexDirection="column" alignItems="center">
          <HeaderForm color={pink[500]} icon={<LockOpenOutlined />} title="Acessar mural de recados" />
          <Form mode="signin" textButton="Entrar" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
