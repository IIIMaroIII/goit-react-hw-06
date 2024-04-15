import css from "./contactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  const isFilteredContactsEmpty = filteredContacts.length === 0;
  const isContactsEmpty = items.length === 0;

  return (
    <>
      {!isContactsEmpty && (
        <ul className={css.list}>
          {!isFilteredContactsEmpty && <Contact data={filteredContacts} />}
        </ul>
      )}
    </>
  );
};

export default ContactList;
