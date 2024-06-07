
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { products } from 'src/_mock/products';

import ProductCard from '../product-card';

// ----------------------------------------------------------------------

export default function EventossView() {
  

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Recuerda que tu asistencia en los eventos es obligatoria
      </Typography>

      

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
