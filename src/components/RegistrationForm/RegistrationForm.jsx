import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" type="email" />
        <Field name="password" placeholder="Password" type="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
