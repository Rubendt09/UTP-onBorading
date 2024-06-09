import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Avatar } from '@mui/material';

// Datos del evento de ejemplo
const initialEvent = {
  imagenURL: '../assets/illustrations/inicio.jpg',
  name: 'Evento de Ejemplo',
  fecha: '2024-06-10',
  ponente: 'Roberto Benitez',
  descripcion: 'En este evento se tratarán diversos temas como xx',
};

export default function AppView() {
  const [selectedEvent, setSelectedEvent] = useState(initialEvent);

  const handleClose = () => setSelectedEvent(null);

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
            <Typography variant="h6" color="text.secondary">
              09/06/2024
            </Typography>
            <Typography  color="text.secondary" sx={{ mb: 2, fontSize: 16 }}>
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

      <Grid container alignItems="center" spacing={1} p={2} pl={0} mt={2}>
        <Grid item>
          <Avatar sx={{ backgroundColor: '#B2C3FF' }}>
            <PushPinOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="h6" color="text.secondary" sx={{ mr: 1 }}>
              Estas inscrito en:
            </Typography>
            <Typography variant="h5" sx={{ flexShrink: 0 }}>
              Modalidad semipresencial
            </Typography>
          </Box>
        </Grid>
      </Grid>


      <Typography variant="h5" color="text.secondary" sx={{ mb: 2, mt:3 }}>
        Nuestras otras plataformas
      </Typography>

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
              cursor: 'pointer',
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
              cursor: 'pointer',
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
              cursor: 'pointer',
            }}
            onClick={() => {
              window.location.href = 'https://info.utp.edu.pe/';
            }}
          />
        </Grid>
      </Grid>

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
            minHeight: {
              xs: '55%',
              sm: '100%',
            },
            p: 4,
            width: {
              xs: '95%',
              sm: '50%',
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
                  height: '100%',
                  objectFit: 'cover', 
                  marginBottom: 20
                }}
              />
              
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
