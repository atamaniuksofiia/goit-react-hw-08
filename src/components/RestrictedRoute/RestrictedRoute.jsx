import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = false; // Логіка для перевірки автентифікації

  if (isLoggedIn) {
    return <Navigate to="/contacts" />; // Якщо користувач залогінений, перенаправляємо на contacts
  }

  return <Component />; // Повертаємо переданий компонент
};

export default RestrictedRoute;
