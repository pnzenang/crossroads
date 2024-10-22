import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Pricing,
  Error,
  Home,
  HomeLayout,
  Services,
  SingleService,
  Register,
  Login,
  Contact,
  ResetPassword,
  ForgotPassword,
  AddPackage,
  Admin,
  AllPackages,
  AllPackagesAdmin,
  DashboardLayout,
  DeletePackage,
  EditPackage,
  Stats,
  Profile,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allPackagesLoader } from './pages/AllPackages';
import { loader as allPackagesAdminLoader } from './pages/AllPackagesAdmin';
import { action as addPackageAction } from './pages/AddPackage';
import { action as editPackageAction } from './pages/EditPackage';
import { loader as editPackageLoader } from './pages/EditPackage';
import { action as deletePackageAction } from './pages/DeletePackage';
import { action as profileAction } from './pages/Profile';
import { action as forgotAction } from './pages/ForgotPassword';
// import { action as resetAction } from './pages/ResetPassword';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },

      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'service/:id',
        element: <SingleService />,
      },

      {
        path: 'pricing',
        element: <SingleService />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
    errorElement: <Error />,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
    errorElement: <Error />,
    action: forgotAction,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    loader: dashboardLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AllPackages />,
        loader: allPackagesLoader,
      },
      {
        path: 'add-package',
        element: <AddPackage />,
        action: addPackageAction,
      },
      {
        path: 'profile',
        element: <Profile />,
        action: profileAction,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: 'edit-package/:id',
        element: <EditPackage />,
        loader: editPackageLoader,
        action: editPackageAction,
      },
      {
        path: 'delete-package/:id',
        action: deletePackageAction,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'all-packages-admin',
        loader: allPackagesAdminLoader,
        element: <AllPackagesAdmin />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
