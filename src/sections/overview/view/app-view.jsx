import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid from '@mui/material/Grid';

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Avatar } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="100%">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Hola, Ruben Dominguez 👋
      </Typography>

      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Charla de cultura UTP
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              18:30 - 20:00
            </Typography>
          </Grid>

          <Grid item xs={6} container direction="column" alignItems="flex-end">
            <Chip label="Presencial" color="primary" variant="outlined" sx={{ mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Auditorio Principal
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CalendarTodayIcon />}
            sx={{ textTransform: 'none' }}
            fullWidth
          >
            Ver mi horario
          </Button>
        </Box>
      </Card>

      <Grid container alignItems="center" spacing={1} p={2} mt={2}>
        <Grid item>
          <Avatar sx={{ backgroundColor: '#B2C3FF' }}>
            <PushPinOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" color="text.secondary" sx={{ mr: 1 }}>
              Estas inscrito en:
            </Typography>
            <Typography variant="h5">Modalidad semipresencial - 50% virtual</Typography>
          </Box>
        </Grid>
      </Grid>

      {/** Contenido de apps */}
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              width: '100%',
              height: '220px',
              boxShadow: 3,
              borderRadius: 2,
              backgroundImage: 'url(/assets/references/utpclass.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              window.location.href = 'https://class.utp.edu.pe/';
            }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              width: '100%',
              height: '220px',
              boxShadow: 3,
              borderRadius: 2,
              backgroundImage: 'url(/assets/references/utpportal.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              window.location.href = 'https://portal.utp.edu.pe/';
            }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              width: '100%',
              height: '220px',
              boxShadow: 3,
              borderRadius: 2,
              backgroundImage: 'url(/assets/references/utpinfo.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              window.location.href = 'https://info.utp.edu.pe/';
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
