import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        actions.resetForm(); // reset form on success
      })
      .catch((error) => {
        actions.setFieldError("submit", error.message); // handle error
      });
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name" placeholder="Ім'я" />
        <ErrorMessage name="name" component="div" />

        <Field type="text" name="number" placeholder="Телефон" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Додати</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
