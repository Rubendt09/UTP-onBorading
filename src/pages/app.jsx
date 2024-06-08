import { Helmet } from 'react-helmet-async';

import { HelpView } from 'src/sections/help/view';

// ----------------------------------------------------------------------

export default function PruebaPage() {
  return (
    <>
      <Helmet>
        <title> Prueba | UTP+onBoarding </title>
      </Helmet>

      <HelpView />
    </>
  );
}
