import { Helmet } from 'react-helmet-async';

import { PruebaView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function PruebaPage() {
  return (
    <>
      <Helmet>
        <title> Prueba | UTP+onBoarding </title>
      </Helmet>

      <PruebaView />
    </>
  );
}
