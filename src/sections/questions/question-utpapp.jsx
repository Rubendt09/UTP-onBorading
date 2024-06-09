import React, { useState, useEffect } from 'react';
import { Grid, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'src/routes/hooks';
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
    correctAnswer: 'Facilitar el acceso a información académica',
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
    correctAnswer: 'Iniciando sesión en la app con sus credenciales',
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
    correctAnswer: 'Documentos de texto y libros de la biblioteca',
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
    correctAnswer: 'Mediante notificaciones en la app',
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
    correctAnswer: 'Biblioteca digital',
  },
];

export default function DetailCourseView() {
  const [answers, setAnswers] = useState({});
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && storedUserData.username) {
      setUsername(storedUserData.username);
    } else {
      console.error('No username found in localStorage');
    }
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = async () => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 20;
      }
    });

    const payload = {
      nombreTest: 'TESTC',
      valorNota: score,
      username,
    };

    try {
      const response = await fetch('http://localhost:8085/api/update/test', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      console.log('Respuestas enviadas:', answers);
      console.log(`La nota es: ${score}`);
      router.push('/courses');
      if (result.ok) {
        console.log('Respuesta del servidor:', result);
      } else {
        console.error('Error del servidor:', result.message);
      }
    } catch (error) {
      console.error('Error al enviar las respuestas:', error);
    }
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
