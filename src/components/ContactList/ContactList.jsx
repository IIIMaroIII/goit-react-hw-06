import css from "./contactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const items = useSelector(selectContacts);
  // const filterName = useSelector(selectNameFilter);
  const res = useSelector(selectFilteredContacts);
  const filteredContacts = useMemo(() => {
    return res;
  }, [res]);
  // const filteredContacts = useMemo(
  //   () =>
  //     items.filter((item) =>
  //       item.name.toLowerCase().includes(filterName.toLowerCase())
  //     ),
  //   [filterName, items]
  // );

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
