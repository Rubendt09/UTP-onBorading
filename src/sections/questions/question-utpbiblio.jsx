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
  { id: 1, text: '¿Cuál es el objetivo principal de la plataforma UTP+biblio mencionada en el video?', options: ['Proveer servicios de entretenimiento', 'Facilitar el acceso a recursos bibliográficos', 'Organizar eventos sociales', 'Ofrecer cursos extracurriculares'] },
  { id: 2, text: '¿Cómo pueden los estudiantes acceder a los recursos de UTP+biblio?', 
    options: ['Descargando una aplicación móvil', 'Iniciando sesión en la plataforma con sus credenciales', 'Visitando la biblioteca física', 'Solicitando acceso por correo electrónico'] },
  { id: 3, text: '¿Qué tipo de materiales pueden encontrar los estudiantes en UTP+biblio?', 
    options: ['Videos de entretenimiento', 'Documentos académicos y libros electrónicos', 'Resultados deportivos', 'Música y podcasts'] },
  { id: 4, text: '¿Qué recurso adicional menciona el video que está disponible para los estudiantes en UTP+biblio?', 
    options: ['Juegos interactivos', 'Acceso a bases de datos especializadas', 'Tienda de libros', 'Plataforma de redes sociales'] },
  { id: 5, text: '¿Cómo pueden los estudiantes acceder a sus registros de préstamos en UTP+biblio?', 
    options: ['Solicitando un reporte en la oficina', 'Consultando la sección de préstamos en la plataforma', 'Esperando el boletín de fin de semestre', 'Pidiendo a un compañero de clase'] },
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
        Evalua tus conocimientos  -  UTP+biblio
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
