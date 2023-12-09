import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../register/register';
export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
