import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../redux/contacts/selectors";
import Contact from "../components/Contact/Contact"; // Ваш компонент контактів

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // Завантаження контактів при завантаженні сторінки
  }, [dispatch]);

  return (
    <div>
      <h1>Контакти</h1>
      {isLoading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => <Contact key={contact.id} {...contact} />)
        ) : (
          <p>Немає контактів.</p>
        )}
      </ul>
    </div>
  );
};

export default ContactsPage;
