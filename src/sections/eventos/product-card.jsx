import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// ----------------------------------------------------------------------

export default function ShopeventoCard({ evento, sx }) {
  const renderImg = (
    <Box
      component="img"
      alt={evento.name}
      src={evento.cover}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'cover',
        position: 'relative',
      }}
    />
  );

  const renderLugar = (
    <Typography variant="subtitle2" sx={{ fontSize: '0.8rem' }}>
      Lugar: {evento.lugar}
    </Typography>
  );

  const renderFecha = (
    <Typography variant="subtitle2" sx={{ fontSize: '0.8rem' }}>
      Fecha: {evento.fecha}
    </Typography>
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, ...sx }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '10em' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={5}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%',margin:0, padding: 0 }}>
              {renderImg}
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Stack spacing={0} sx={{ p: 1, height: '100%' }}>
              <Stack spacing={0} sx={{ fontWeight: 'bold', justifyContent: 'center' }}>
                {evento.name}
              </Stack>

              <Stack spacing={0} sx={{ justifyContent: 'center', color: '#515860' }}>
                {renderLugar}
                {renderFecha}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

ShopeventoCard.propTypes = {
  evento: PropTypes.object.isRequired,
  sx: PropTypes.object,
};
