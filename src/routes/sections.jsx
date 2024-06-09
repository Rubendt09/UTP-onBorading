import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UtpClass = lazy(() => import('src/pages/utp+class'));
export const UtpPortal = lazy(() => import('src/pages/utp+portal'));
export const UtpClassEvaluacion = lazy(() => import('src/pages/utp+class-evaluation'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const EventosPage = lazy(() => import('src/pages/eventos'));
export const CoursesPage = lazy(() => import('src/pages/courses'));
export const ProductsPage = lazy(() => import('src/pages/products'));
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
        { path: 'products', element: <ProductsPage /> },
        { path: 'courses', element: <CoursesPage /> },
        { path: 'help', element: <HelpPage /> },
        { path: 'courses/utp+class', element: <UtpClass /> },
        { path: 'courses/utp+portal', element: <UtpPortal /> },
        { path: 'courses/utp+class/evaluacion', element: <UtpClassEvaluacion /> },
        { path: 'blog', element: <BlogPage /> },
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
