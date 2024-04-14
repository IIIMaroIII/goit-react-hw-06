import css from './contactList.module.css';
import Contact from './Contact/Contact';
import PropTypes, { exact } from 'prop-types';
import { arrayOf } from 'prop-types';

const ContactList = ({ data, onDelete }) => {
  return (
    <ul className={css.list}>
      <Contact onDelete={onDelete} data={data} />
    </ul>
  );
};

ContactList.propTypes = {
  data: arrayOf(
    exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
