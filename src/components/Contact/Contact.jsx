import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors"; // Імпортуємо селектори

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {phone}
      {loading ? (
        <span>Завантаження...</span>
      ) : (
        <button onClick={handleDelete}>Видалити</button>
      )}
      {error && <p>Помилка: {error}</p>}
    </li>
  );
};

export default Contact;
