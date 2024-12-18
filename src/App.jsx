import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
