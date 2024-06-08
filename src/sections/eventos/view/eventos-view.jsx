import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { eventos } from 'src/_mock/evento';
import ShopeventoCard from '../product-card';

export default function EventossView() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Recuerda que tu asistencia en los eventos es obligatoria
      </Typography>

      <Grid container spacing={3}>
        {eventos.map((evento) => (
          <Grid item key={evento.id} xs={12} sm={6} md={6} sx={{ display: 'flex' }}>
            <ShopeventoCard 
              evento={evento} 
              onClick={() => handleCardClick(evento)}
              sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }} 
            />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
