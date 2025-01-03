import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
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
