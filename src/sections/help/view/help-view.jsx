import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// ----------------------------------------------------------------------

export default function HelpView() {
  return (
    <Container maxWidth="100%">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Preguntas frecuentes
      </Typography>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo accedo a la plataforma UTPClass?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            Puedes acceder a UTP+Class desde nuestra pagina de inicio utilizando tu correo institucional y la contraseña proporcionada al momento de tu matrícula.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Dónde puedo consultar el horario de mis clases?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            El horario de tus clases está disponible en el portal de estudiantes. Inicia sesión con tus credenciales y navega a la sección &quot;Mi Horario&quot;.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo reservo una sala de estudio en la biblioteca?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            Para reservar una sala de estudio, ingresa a UTP+biblio y selecciona la opción de reservas. Sigue las instrucciones para elegir el horario y la sala disponibles.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Dónde puedo encontrar información sobre las actividades extracurriculares?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            La información sobre actividades extracurriculares se publica regularmente en UTP+Info y en el portal de estudiantes. También puedes preguntar en la oficina de vida estudiantil.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Qué hago si tengo problemas con mi cuenta institucional?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            Si tienes problemas con tu cuenta institucional, contacta al soporte técnico a través del portal de estudiantes o envía un correo a soporte@utp.edu.pe. También puedes visitar la oficina de TI en el campus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo puedo obtener mi carné universitario?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            El carné universitario se emite automáticamente después de tu inscripción. Puedes recogerlo en la oficina de servicios estudiantiles una vez que recibas la notificación por correo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Qué servicios ofrece la oficina de bienestar estudiantil?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            La oficina de bienestar estudiantil ofrece servicios de asesoría psicológica, orientación vocacional, talleres de desarrollo personal, y apoyo en situaciones de emergencia.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo accedo a la red Wi-Fi del campus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            La red Wi-Fi del campus está disponible para todos los estudiantes. Conéctate a la red &quot;UTP-Estudiantes&quot; y utiliza tu correo institucional y contraseña para acceder.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cuáles son los procedimientos para realizar trámites administrativos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            Los trámites administrativos, como la solicitud de certificados y constancias, se realizan a través del portal de estudiantes. Inicia sesión y dirígete a la sección de &quot;Trámites&quot; para más detalles.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: 3, borderRadius: 2, mt: 4, backgroundColor: '#FCA5B5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">¿Cómo puedo participar en actividades deportivas y culturales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="text.secondary">
            Para participar en actividades deportivas y culturales, revisa el calendario de actividades en UTP+Info y comunícate con la oficina de vida estudiantil para inscribirte en los eventos de tu interés.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mt: 5, width: '100%' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none' }}
          fullWidth
        >
          Necesito Ayuda
        </Button>
      </Box>
    </Container>
  );
}
