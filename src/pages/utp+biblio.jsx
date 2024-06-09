import { Helmet } from 'react-helmet-async';
import DetailCourseView from 'src/sections/detail-course';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> UTP+biblio | UTP </title>
      </Helmet>

      <DetailCourseView 
        nombre="Conoce UTP+biblio" 
        logo="https://tubiblioteca.utp.edu.pe/opac-tmpl/skyblue/images/icons/UTP+biblio.svg"
        video="https://www.youtube.com/embed/D8lD55WPHak?si=6VzCfkh24fIj-Q1K"
        ruta="utp+biblio"
      />
    </>
  );
}
