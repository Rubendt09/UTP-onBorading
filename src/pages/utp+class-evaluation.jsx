import { Helmet } from 'react-helmet-async';

import { QuestionUtpClass } from 'src/sections/questions';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Evaluación | UTP+class </title>
      </Helmet>

      <QuestionUtpClass />
    </>
  );
}
