import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../../pages/register.page'));
const LoginPage = lazy(() => import('../../pages/login.page'));
const HomePage = lazy(() => import('../../pages/home.page'));
const Details = lazy(() => import('../details/details'));
const AddFilm = lazy(() => import('../create/add.film'));
const EditFilm = lazy(() => import('../edit/edit.film'));
export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>

          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/addfilm" element={<AddFilm></AddFilm>}></Route>
          <Route path="/editfilm/:id" element={<EditFilm></EditFilm>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
