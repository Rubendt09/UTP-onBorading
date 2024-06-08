import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShopeventoCard from '../product-card';

export default function EventossView() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleEventos = async () => {
      const response = await fetch('http://localhost:8085/api/event/get-all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const data = await response.json();
      setLoading(false);
      
      if (data.ok && data.message === "SUCCESS") {
        setEventos(data.body);
      } else {
        alert('Error al obtener los eventos');
      }
    };

    handleEventos();
  }, []);

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

      {loading ? (
        <Typography>Cargando eventos...</Typography>
      ) : (
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
      )}

      <Modal open={!!selectedEvent} onClose={handleClose}>
        <Box>
          {/* Aquí puedes renderizar la información del evento seleccionado */}
          {selectedEvent && (
            <div>
              <h2>{selectedEvent.name}</h2>
              <p>{selectedEvent.lugar}</p>
              <img src={selectedEvent.imagenURL} alt={selectedEvent.name} />
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
