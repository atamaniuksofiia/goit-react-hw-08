import ContactList from "../components/Contact/ContactList";
import ContactForm from "../components/Contact/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from "../components/SearchBox/SearchBox";
import filtersReducer from "../redux/filters/slice";

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <SearchBox />
      <ContactForm />
      <ContactList filter={filtersReducer} />
    </div>
  );
};

export default ContactPage;
