import { Helmet } from 'react-helmet-async';

import { QuestionUtpBiblio } from 'src/sections/questions';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Evaluación | UTP+biblio </title>
      </Helmet>

      <QuestionUtpBiblio />
    </>
  );
}
