import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, IconButton, List, ListItem, ListItemText, Paper, TextField } from '@mui/material'; // eslint-disable-line perfectionist/sort-named-imports
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';

export default function HelpView() {
  const [historial, setHistorial] = useState([]); 
  const [pregunta, setPregunta] = useState(''); 

  const procesarRespuesta = (respuesta) => {
    // eliminar la sección de citas
    const indexCitations = respuesta.indexOf('<citations>');
    if (indexCitations !== -1) {
      respuesta = respuesta.substring(0, indexCitations).trim();
    }

    // Opcional: Elimina caracteres de referencia como [^1.1.0]
    respuesta = respuesta.replace(/\[\^.*?\]/g, '');

    return respuesta;
  };

  const handleSendClick = async () => {
    if (pregunta.trim() === '') return; 

    const nuevaPregunta = { tipo: 'pregunta', texto: pregunta };

    setHistorial((prevHistorial) => [...prevHistorial, nuevaPregunta]); 

    try {
      const response = await fetch('https://api.stack-ai.com/inference/v0/run/679da2fb-16cd-40a6-b164-428f53bd27a7/666a9ceb6a84761fcb99cba3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 0c667cc4-116c-4223-b2fb-95401644be86',
        },
        body: JSON.stringify({ "in-0": pregunta }),
      });

      const data = await response.json();
      const respuestaOriginal = data.outputs['out-0'];
      const respuestaProcesada = procesarRespuesta(respuestaOriginal);

      const nuevaRespuesta = { tipo: 'respuesta', texto: respuestaProcesada };

      setHistorial((prevHistorial) => [...prevHistorial, nuevaRespuesta]); 
    } catch (error) {
      console.error('Error al obtener la respuesta de la API:', error);
      const errorRespuesta = { tipo: 'respuesta', texto: 'Hubo un error al obtener la respuesta. Por favor, inténtalo nuevamente.' };
      setHistorial((prevHistorial) => [...prevHistorial, errorRespuesta]);
    }

    setPregunta(''); 
  };

  return (
    <Container maxWidth="100%">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Preguntas frecuentes
      </Typography>

      <Paper sx={{ p: 2, borderRadius: '8px', height: '60vh', overflowY: 'auto' }}>
        <List>
          {historial.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.texto}
                primaryTypographyProps={{
                  align: item.tipo === 'pregunta' ? 'right' : 'left',
                  color: item.tipo === 'pregunta' ? 'primary' : 'textSecondary',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box display="flex" alignItems="center" marginTop={2} marginBottom={2}>
        <TextField
          name="text"
          placeholder="Pregúntale a +Assistant"
          variant="outlined"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
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
          <SendIcon sx={{ color: '#5B36F2' }} />
        </IconButton>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#25D366', 
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
        href="https://api.whatsapp.com/send?phone=51960252970&text=Hola,%20tengo%20una%20consulta" 
        target="_blank" 
        >
        Necesito ayuda orientada
      </Button>
    </Container>
  );
}
