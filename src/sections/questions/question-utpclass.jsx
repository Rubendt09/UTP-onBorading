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
    text: '¿Cuál es el objetivo principal de la plataforma UTP+class?',
    options: [
      'Ofrecer un lugar para el entretenimiento de los estudiantes',
      'Facilitar la gestión de documentos financieros',
      'Mejorar la experiencia educativa de los estudiantes',
      'No proporcionar servicios de mensajería',
    ],
    correctAnswer: 'Mejorar la experiencia educativa de los estudiantes',
  },
  {
    id: 2,
    text: '¿Qué funcionalidad destaca los videos sobre UTP+class?',
    options: [
      'Transmisión de video en vivo',
      'Acceso a materiales de estudio y tareas',
      'Plataforma para comprar libros',
      'Red social para estudiantes',
    ],
    correctAnswer: 'Acceso a materiales de estudio y tareas',
  },
  {
    id: 3,
    text: '¿Cómo pueden los estudiantes acceder a sus cursos en UTP+class?',
    options: [
      'Transmisión de video en vivo',
      'Iniciando sesión en la plataforma con sus credenciales',
      'Descargando una aplicación de terceros',
      'Pidiendo acceso directo al profesor',
    ],
    correctAnswer: 'Iniciando sesión en la plataforma con sus credenciales',
  },
  {
    id: 4,
    text: '¿Qué recurso importante menciona el video que está disponible para los estudiantes en UTP+class?',
    options: [
      'Juegos interactivos',
      'Materiales complementarios y evaluaciones',
      'Noticias sobre deportes',
      'Música y podcasts',
    ],
    correctAnswer: 'Materiales complementarios y evaluaciones',
  },
  {
    id: 5,
    text: '¿Cómo se asegura UTP+class de que los estudiantes completen sus tareas?',
    options: [
      'Enviando recordatorios diarios por mensaje de texto',
      'Utilizando un sistema de notificaciones y seguimiento de progreso',
      'Llamando a los padres de los estudiantes',
      'Ofreciendo recompensas monetarias',
    ],
    correctAnswer: 'Utilizando un sistema de notificaciones y seguimiento de progreso',
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
      nombreTest: 'TESTA',
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
      console.log(`La nota es: ${score}`);
      console.log('Respuesta del servidor:', result);
      router.push('/courses');
    } catch (error) {
      console.error('Error al enviar las respuestas:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Evalua tus conocimientos - UTP+class
      </Typography>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        {questions.map((question, index) => (
          <Card key={question.id} sx={{ p: 2, mb: 2 }}>
            <Grid sx={{ p: 5 }} >
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
