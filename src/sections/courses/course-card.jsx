import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterLink } from 'src/routes/components';
import Label from 'src/components/label';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

// ----------------------------------------------------------------------

export default function ShopCourseCard({ course }) {
  const getStatusColor = (score) => {
    if (score >= 60) return 'success';
    if (score < 60 && score > 0) return 'error';
    if (score < 0) return 'info';
    return 'info';
  };

  const renderStatus = (
    <Label variant="filled" color={getStatusColor(course.testScore)}>
      {course.testScore !== null && course.testScore >= 0
        ? `Nota: ${course.testScore}`
        : 'Por completar'}
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

  const renderImgTutor = (
    <img
      src="https://class.utp.edu.pe/static/media/teacher.2bee17b1.svg"
      alt="Tutor Curso Introducción"
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );

  const handleClick = (event) => {
    if (course.testScore > 0) {
      event.preventDefault();
      toast.warn("El examen ya fue completado.", {
        icon: <FeedbackOutlinedIcon />
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Link
        component={RouterLink}
        href={`/courses/${course.links}`}
        sx={{ display: 'contents' }}
        onClick={handleClick}
      >
        <Card>
          <Box sx={{ pt: '35%', position: 'relative' }}>{renderImg}</Box>

          <Stack spacing={2} sx={{ p: 3 }}>
            <Typography color="inherit" underline="hover" variant="subtitle2">
              {course.name}
            </Typography>

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" gap={1}>
                {renderImgTutor}
                <Typography color="inherit" fontSize={12}>
                  Tutor Curso Introducción
                </Typography>
              </Stack>
              {renderStatus}
            </Stack>
          </Stack>
        </Card>
      </Link>
    </>
  );
}

ShopCourseCard.propTypes = {
  course: PropTypes.object.isRequired,
};
