import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Avatar } from '@mui/material';

// ----------------------------------------------------------------------

export default function HelpView() {
  return (
    <Container maxWidth="100%">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Preguntas 
      </Typography>

      

      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#f0f4fa' }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={2} container direction="column" alignItems="center">
            <Avatar sx={{ backgroundColor: '#e0e7ff', color: '#5c6bc0' }}>
              <PushPinOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
              Estas inscrito en:
            </Typography>
            <Typography variant="h5">Modalidad semipresencial - 50% virtual</Typography>
          </Grid>
        </Grid>
      </Card>

      
      
    </Container>
  );
}
