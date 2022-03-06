import { FC, ReactNode } from 'react';

import { Grid } from '@mui/material';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'
    >
      <img src='amazon-logo.png' alt='amazon-logo' height='40px' />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
