import React, { useState } from 'react';
import { Grid, Button, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// ----------------------------------------------------------------------
const questions = [
  {
    id: 1,
    text: '¿Cuál es el objetivo principal de la UTP+app mencionado en el video?',
    options: [
      'Proveer servicios de entretenimiento',
      'Facilitar el acceso a información académica',
      'Organizar eventos sociales',
      'Ofrecer cursos extracurriculares',
    ],
  },
  {
    id: 2,
    text: '¿Cómo pueden los estudiantes acceder a sus cursos en UTP+app?',
    options: [
      'Enviando un correo al administrador',
      'Iniciando sesión en la app con sus credenciales',
      'Llamando a la oficina académica',
      'Descargando una aplicación móvil adicional',
    ],
  },
  {
    id: 3,
    text: '¿Qué tipo de materiales pueden encontrar los estudiantes en UTP+app?',
    options: [
      'Documentos de texto y libros de la biblioteca',
      'Artículos de noticias',
      'Resultados deportivos',
      'Videos musicales',
    ],
  },
  {
    id: 4,
    text: '¿Cómo se notifican las nuevas tareas a los estudiantes en UTP+app?',
    options: [
      'A través de anuncios en el campus',
      'Mediante notificaciones en la app',
      'Enviando cartas a sus casas',
      'Usando redes sociales',
    ],
  },
  {
    id: 5,
    text: '¿Qué recurso adicional menciona el video que está disponible para los estudiantes en UTP+app?',
    options: [
      'Juegos interactivos',
      'Biblioteca digital',
      'Tienda de libros',
      'Plataforma de redes sociales',
    ],
  },
];

export default function DetailCourseView() {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    console.log('Respuestas enviadas:', answers);
    // Aquí puedes agregar la lógica para enviar las respuestas
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Evalua tus conocimientos - UTP+app
      </Typography>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        {questions.map((question, index) => (
          <Card key={question.id} sx={{ p: 2, mb: 2 }}>
            <Grid sx={{ p: 2 }}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id={`radio-buttons-group-label-${question.id}`}>
                  <Card
                    sx={{ p: 2, mb: 2, boxShadow: 2, borderRadius: 1, backgroundColor: '#CBDFFF' }}
                  >
                    <Typography variant="h6">
                      {index + 1}. {question.text}
                    </Typography>
                  </Card>
                </FormLabel>
                <Grid>
                  <RadioGroup
                    aria-labelledby={`radio-buttons-group-label-${question.id}`}
                    name={`radio-buttons-group-${question.id}`}
                    value={answers[question.id] || ''}
                    onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                    sx={{ display: 'inline-flex', flexDirection: 'column' }}
                  >
                    {question.options.map((option, optionIndex) => (
                      <FormControlLabel
                        key={optionIndex}
                        value={option}
                        control={<Radio />}
                        label={option}
                        sx={{ mt: 1 }}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </FormControl>
            </Grid>
          </Card>
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Examen
        </Button>
      </Card>
    </Container>
  );
}
