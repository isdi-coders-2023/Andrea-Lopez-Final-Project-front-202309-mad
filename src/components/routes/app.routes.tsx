import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../../pages/register.page'));
const LoginPage = lazy(() => import('../../pages/login.page'));
const HomePage = lazy(() => import('../../pages/home.page'));

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
          <Route path="/home" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
