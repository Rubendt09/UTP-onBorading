import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const UtpClass = lazy(() => import('src/pages/utp+class'));
export const UtpClassEvaluacion = lazy(() => import('src/pages/utp+class-evaluation'));
export const UtpPortal = lazy(() => import('src/pages/utp+portal'));
export const UtpPortalEvaluacion = lazy(() => import('src/pages/utp+portal-evaluation'));
export const UtpApp = lazy(() => import('src/pages/utp+app'));
export const UtpAppEvaluacion = lazy(() => import('src/pages/utp+app-evaluation'));
export const UtpInfo = lazy(() => import('src/pages/utp+info'));
export const UtpInfoEvaluacion = lazy(() => import('src/pages/utp+info-evaluation'));
export const UtpBiblio = lazy(() => import('src/pages/utp+biblio'));
export const UtpBiblioEvaluacion = lazy(() => import('src/pages/utp+biblio-evaluation'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const EventosPage = lazy(() => import('src/pages/eventos'));
export const CoursesPage = lazy(() => import('src/pages/courses'));
export const HelpPage = lazy(() => import('src/pages/help'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'app', element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'eventos', element: <EventosPage /> },
        { path: 'courses', element: <CoursesPage /> },
        { path: 'help', element: <HelpPage /> },
        { path: 'courses/utp+class', element: <UtpClass /> },
        { path: 'courses/utp+class/evaluacion', element: <UtpClassEvaluacion /> },
        { path: 'courses/utp+portal', element: <UtpPortal /> },
        { path: 'courses/utp+portal/evaluacion', element: <UtpPortalEvaluacion /> },
        { path: 'courses/utp+app', element: <UtpApp /> },
        { path: 'courses/utp+app/evaluacion', element: <UtpAppEvaluacion /> },
        { path: 'courses/utp+info', element: <UtpInfo /> },
        { path: 'courses/utp+info/evaluacion', element: <UtpInfoEvaluacion /> },
        { path: 'courses/utp+biblio', element: <UtpBiblio /> },
        { path: 'courses/utp+biblio/evaluacion', element: <UtpBiblioEvaluacion /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
