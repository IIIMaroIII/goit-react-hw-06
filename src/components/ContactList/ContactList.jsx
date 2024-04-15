import css from "./contactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const filteredContacts = useMemo(() =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filterName.toLowerCase())
    )
  );
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
