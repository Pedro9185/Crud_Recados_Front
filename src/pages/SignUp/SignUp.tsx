import { VerifiedUser } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';
import Form from '../../components/Form';
import HeaderForm from '../../components/HeaderForm';

const SignUp: React.FC = () => {
  return (
    <Grid
      container
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      bgcolor="#002884"
    >
      <Grid item xs={12} sm={8} md={5} sx={{ borderRadius: '25px', backgroundColor: '#757ce8' }}>
        <Box component="section" marginY={8} marginX={4} display="flex" flexDirection="column" alignItems="center">
          <HeaderForm color={green[500]} icon={<VerifiedUser />} title="Cadastre-se" />
          <Form mode="signup" textButton="Criar conta" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
