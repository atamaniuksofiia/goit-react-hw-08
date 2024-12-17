import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="email" placeholder="Email" type="email" />
        <Field name="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;