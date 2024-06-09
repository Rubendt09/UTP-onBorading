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
  { id: 1, text: '¿Cuál es la función principal de la plataforma UTP+class mencionada en el video?', options: ['Gestionar pagos de matrícula', 'Facilitar la gestión de documentos financieros', 'Mejorar la experiencia educativa de los estudiantes', 'No proporcionar servicios de mensajería'] },
  { id: 2, text: '¿Qué funcionalidad destaca los videos sobre UTP+class?', 
    options: ['Transmisión de video en vivo', 'Acceso a materiales de estudio y tareas', 'Plataforma para comprar libros', 'Red social para estudiantes'] },
  { id: 3, text: '¿Cómo pueden los estudiantes acceder a sus cursos en UTP+class?', 
    options: ['Transmisión de video en vivo', 'Iniciando sesión en la plataforma con sus credenciales', 'Descargando una aplicación de terceros', 'Pidiendo acceso directo al profesor'] },
  { id: 4, text: '¿Qué recurso importante menciona el video que está disponible para los estudiantes en UTP+class?', 
    options: ['Juegos interactivos', 'Materiales complementarios y evaluaciones', 'Noticias sobre deportes', 'Música y podcasts'] },
  { id: 5, text: '¿Cómo se asegura UTP+class de que los estudiantes completen sus tareas?', 
    options: ['Enviando recordatorios diarios por mensaje de texto', 'Utilizando un sistema de notificaciones y seguimiento de progreso', 'Llamando a los padres de los estudiantes', 'Ofreciendo recompensas monetarias'] },
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
      <Typography variant="h4" sx={{ mb:  5}}>
        Evalua tus conocimientos  -  UTP+info
      </Typography>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        {questions.map((question, index) => (
          <Card key={question.id} sx={{ p: 2, mb: 2 }}>
            <Grid sx={{ p: 2 }}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id={`radio-buttons-group-label-${question.id}`}>
                  <Card sx={{ p: 2, mb: 2, boxShadow: 2, borderRadius: 1, backgroundColor: '#CBDFFF'}}>
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
