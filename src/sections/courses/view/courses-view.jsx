import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { courses } from 'src/_mock/courses';

import CourseCard from '../course-card';

// ----------------------------------------------------------------------

export default function CoursesView() {

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Mis cursos
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid key={course.id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>


    </Container>
  );
}
