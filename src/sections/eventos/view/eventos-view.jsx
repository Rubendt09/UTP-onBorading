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

      <Modal 
        open={!!selectedEvent} 
        onClose={handleClose}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 15, 55, 0.8)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            minHeight: 550,
            p: 4,
            width: {
              xs: '90%',
              sm: 400,
            },
            borderRadius: 1,
          }}
        >
          {selectedEvent && (
            <div>
              <img 
                src={selectedEvent.imagenURL} 
                alt={selectedEvent.name} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover', 
                  marginBottom: 20
                }}
              />
              <Typography variant="body2" color="textSecondary" fontSize={12} sx={{ mb: 0 }}>
                Conferencia
              </Typography>
              <Typography variant="h6" fontSize={16} sx={{ mb: 1 }}>
                {selectedEvent.name}:
              </Typography>
              <Typography variant="body2" fontSize={13}  color="textSecondary" sx={{ mb: 0 }}>
                {selectedEvent.fecha}, de 11:00 a 12:00
              </Typography>
              <Typography variant="body2" fontSize={13}  color="textSecondary" sx={{ mb: 1 }}>
                Ponente: Roberto Benitez
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Descripción
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                En este evento se tratarán diversos temas como xx
              </Typography>
              <Typography variant="body2" fontSize={13} color="textSecondary">
                Organizado por: OnboardingUTP
              </Typography>
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
