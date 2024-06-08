import * as React from 'react';
import { Grid, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





// ----------------------------------------------------------------------

export default function DetailCourseView() {


  return (
    
    <Container>
      <Typography variant="h4" sx={{ mb:  5}}>
      Demuestra lo aprendido  -  Evaluación de UTP+class
      </Typography>
      
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        <Grid sx={{ p: 2 }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <Card sx={{ p: 2, boxShadow: 2, borderRadius: 1, backgroundColor: '#CBDFFF' }}>
                <Typography variant="h6" fullWidth>
                  1. ¿Cuál es el objetivo principal de la plataforma UTP+class?
                </Typography>
              </Card>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ ml: 5, mt: 3}}
            >
              <FormControlLabel value="A" control={<Radio />} label="Ofrecer un lugar para el entretenimiento de los estudiantes" />
              <FormControlLabel value="B" control={<Radio />} label="Facilitar la gestión de documentos financieros" />
              <FormControlLabel value="C" control={<Radio />} label="Mejorar la experiencia educativa de los estudiantes" />
              <FormControlLabel value="D" control={<Radio />} label="No proporcionar servicios de mensajería" />
            </RadioGroup>
          </FormControl>
        </Grid>
        
      </Card>
      
    </Container>

    
  );
}
