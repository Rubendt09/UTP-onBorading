import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopCourseCard({ course }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(course.status === 'Completado' && 'success') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'capitalize',
      }}
    >
      {course.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={course.name}
      src={course.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );



  return (
    <Card>
      <Box sx={{ pt: '55%', position: 'relative' }}>
        {course.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {course.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={course.colors} />
   
        </Stack>
      </Stack>
    </Card>
  );
}

ShopCourseCard.propTypes = {
  course: PropTypes.object,
};
