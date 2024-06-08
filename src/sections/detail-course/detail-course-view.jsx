import * as React from 'react';
import { Box,Link, Grid, Card ,Button,Rating,Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { RouterLink } from 'src/routes/components';




// ----------------------------------------------------------------------
const iframeStyle = {
  border: 'none'
};




export default function DetailCourseView() {

  const [value, setValue] = React.useState(5);

  return (
    
    <Container>
      <Typography variant="h4" sx={{ mb:  5}}>
        Conoce UTP+class
      </Typography>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
        <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, m: 4, backgroundColor: '#CBDFFF' }}>
          <Grid item xs={12} container direction="column" alignItems="center" spacing={1} >
            <Typography variant="h6" color="#4A4F55" sx={{ mb: 1, textAlign: 'center' }}>
              Te damos la bienvenida a
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <img src="https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/ec28d5df-f86c-4654-82de-b6b48ffe499a/UTP%20%2B%20class_DIORJI.png" alt="Imagen de bienvenida a UTP+class" width={300} />
            </Box>

            <Typography variant="h5" color="#4A4F55" sx={{ mb: 1, textAlign: 'center' }}>
              Tu nueva plataforma de aprendizaje online
            </Typography>
          </Grid>
        </Card>

        <Box
          sx={{
            position: 'relative',
            paddingBottom: '60%', // Mantiene la relación de aspecto 16:9
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            background: '#000',
            '& iframe': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            m: 4,
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DxqNCmjW1kQ?si=rKAlhCod_PuokSm1"
            title="YouTube video player"
            style={iframeStyle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>

        <Grid 
        item 
        container 
        direction="column" 
        justifyContent="center"  
        alignItems="center"  
        xs={12}
        
        >
        <Grid item container 
        direction="column" 
        justifyContent="center"  
        alignItems="center"
        sx={{ mb:  3}} >
          <Typography component="legend">Valora este contenido</Typography>
          <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
        </Grid>
        <Grid item>
        <Link component={RouterLink} href="/courses/utp+class/evaluacion" sx={{ display: 'contents' }}>
          <Button variant="contained" color="primary" sx={{ textTransform: 'none' }} >
            Demuestra lo aprendido
          </Button>
        </Link>
          
        </Grid>
      </Grid>
      </Card>
    </Container>

    
  );
}
