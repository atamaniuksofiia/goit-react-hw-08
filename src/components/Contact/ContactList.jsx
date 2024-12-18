// import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/slice";
// import Contact from "./Contact";

// const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   return (
//     <ul>
//       {filteredContacts.map((contact) => (
//         <Contact key={contact.id} {...contact} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import Contact from "./Contact";
import { selectNameFilter } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Завантаження контактів...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
