import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { courses as mockCourses } from 'src/_mock/courses';
import { Avatar } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CourseCard from '../course-card';
// ----------------------------------------------------------------------

export default function CoursesView() {
  const [courses, setCourses] = useState(mockCourses);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && storedUserData.username) {
      setUsername(storedUserData.username);
    } else {
      console.error('No username found in localStorage');
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8085/api/user/get-test/${username}`);
        const data = await response.json();

        if (data.ok) {
          // Update courses with test scores
          const updatedCourses = mockCourses.map((course, index) => {
            let testScore;
            if (index === 0) testScore = data.body.testA;
            if (index === 1) testScore = data.body.testB;
            if (index === 2) testScore = data.body.testC;
            if (index === 3) testScore = data.body.testD;
            return { ...course, testScore };
          });
          setCourses(updatedCourses);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 0 }}>
        Mis cursos
      </Typography>

      <Grid container alignItems="center" spacing={1} p={2} mt={2} sx={{ mb: 2 }}>
        <Grid item>
          <Avatar sx={{ backgroundColor: '#B2C3FF', ml: -2 }}>
            <PushPinOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="h6" color="text.secondary" sx={{ mr: 1 }}>
              Para aparecer el ranking debes
            </Typography>
            <Typography variant="h5" sx={{ flexShrink: 0 }}>
              Culminar tus cursos
            </Typography>
          </Box>
        </Grid>
      </Grid>

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
