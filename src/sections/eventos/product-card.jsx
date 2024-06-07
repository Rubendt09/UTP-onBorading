import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'cover',
        position: 'relative',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1" sx={{ fontSize: '0.8rem' }}>
      Lugar: {product.lugar}
    </Typography>
  );

  const renderFecha = (
    <Typography variant="subtitle1" sx={{ fontSize: '0.8rem' }}>
      Fecha: {product.fecha}
    </Typography>
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, marginRight: '60rem' }}> {/* Aquí estableces el ancho máximo del Card */}
      <Card>
        <Grid container>
          <Grid item xs={4}>
            <Box sx={{ position: 'relative', pt: '100%', padding: 0 }}>{renderImg}</Box>
          </Grid>

          <Grid item xs={8}>
            <Stack spacing={0} sx={{ p: 1 }}>
              <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
                {product.name}
              </Link>

              <Stack spacing={1}>
                {renderPrice}
                {renderFecha}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
