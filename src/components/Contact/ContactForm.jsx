import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name: "Софія", number: "5674657657" }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Завантаження..." : "Додати"}
      </button>
      {error && <p>Помилка: {error}</p>}
    </form>
  );
};

export default ContactForm;
