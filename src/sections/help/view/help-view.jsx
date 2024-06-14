import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HelpView() {
  const [respuesta, setRespuesta] = useState('Aquí va tu respuesta'); // Estado para la respuesta
  const [nuevaRespuesta, setNuevaRespuesta] = useState(''); // Estado para la nueva respuesta

  const handleSendClick = () => {
    setRespuesta(nuevaRespuesta); // Actualiza la respuesta con la nueva respuesta
    setNuevaRespuesta(''); // Limpia el campo de texto
  };

  return (
    <Container maxWidth="100%">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Preguntas frecuentes
      </Typography>

      <Box marginTop={3} sx={{ borderRadius: '8px' }}>
        <Box
          display="flex"
          alignItems="center"
          marginTop={2}
          marginBottom={2}
          sx={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '5px',
            width: '100%',
          }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 2, mt: 3 }}
            style={{
              width: '100%',
              border: 'none',
              resize: 'none',
              outline: 'none',
              textAlign: 'right',
              padding: '10px',
              fontSize: '16px',
              fontWeight: 'normal',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {respuesta}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <TextField
            name="text"
            placeholder="Pregúntale a +Assistant"
            variant="outlined"
            value={nuevaRespuesta} // Valor controlado por el estado
            onChange={(e) => setNuevaRespuesta(e.target.value)} // Actualiza el estado con el valor del campo de texto
            sx={{
              backgroundColor: 'white',
              borderRadius: '50px',
              padding: '0px',
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
            fullWidth
          />
          <IconButton onClick={handleSendClick}>
            <SendIcon sx={{ color: '#F82650' }} />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#25D366', // Color de WhatsApp
            color: 'white',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#25D366',
            },
          }}
          fullWidth
          startIcon={<WhatsAppIcon />}
          component="a"
          href="https://api.whatsapp.com/send?phone=51960252970&text=Hola,%20tengo%20una%20consulta" // Reemplaza con la URL de WhatsApp que desees
          target="_blank" // Para abrir en una nueva pestaña
        >
          Necesito ayuda orientada
        </Button>
      </Box>
    </Container>
  );
}
