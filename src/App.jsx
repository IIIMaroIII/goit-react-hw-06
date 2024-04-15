import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <PhoneBook />
        <ContactForm />
        <SearchBox />
      </div>

      <ContactList />
    </>
  );
}

export default App;
