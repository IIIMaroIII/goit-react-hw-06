import Phonebook from "./components/PhoneBook/PhoneBook";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Phonebook />
        <ContactForm />
        <SearchBox />
      </div>

      <ContactList />
    </>
  );
}

export default App;
