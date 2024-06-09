import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { courses as mockCourses } from 'src/_mock/courses';
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
