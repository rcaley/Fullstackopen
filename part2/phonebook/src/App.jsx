import { useState, useEffect } from "react";
import Filter from './components/Filter'
import Form from "./components/Form";
import Phonebook from "./components/Phonebook";
import Notification from "./components/Notification";
import personServices from "./services/persons"
// import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [message, setMessage] = useState(["", true])

  useEffect(() => {
    personServices.getAll().then(readPersons => setPersons(readPersons))
  }, []);

  const showNotification = (message, success) => {
    setMessage([message, success])
    setTimeout(() => setMessage([null, true]), 5000)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const inPersons = persons.map((person) => person.name).includes(newName);
    if (!inPersons) {
      const newRow = {
        name: newName,
        number: newNumber,
      };
      personServices.addRow(newRow).then(addedRow => {
        setPersons(persons.concat(addedRow))
        showNotification(`${newName}'s phone number was added`, true)
        setNewName("");
        setNewNumber("");
      });
    } else {
      const okReplace = confirm(`Do you want to replace ${newName}'s phone number?`);
      if (okReplace) {
        const existingRow = persons.find(person => person.name === newName)
        const changedRow = { ...existingRow, number: newNumber}
        const toChangeId = existingRow.id
        personServices.changeNumber(toChangeId, changedRow)
                      .then(respRow => {
          setPersons(persons.map(p => p.id === respRow.id ? changedRow : p))
          showNotification(`${newName}'s phone number was replaced`, true)
          setNewName("");
          setNewNumber("");
        })
                      .catch(error => 
                        showNotification("Failed to change phone number. " 
                          + "Please refresh", false)
                      )
      }
    }
  };

  const handleChange = (change) => (event) => change(event.target.value);

  const handleDelete = (id) => {
    const okToDelete = confirm(`Are you sure you want to delete row ${id}?`);
    if (okToDelete) {
      personServices.delRow(id).then((deletedRow) => {
        const delPerson = persons.find(p => p.id === id).name
        setPersons(persons.filter((person) => person.id !== deletedRow.id));
        showNotification(`${delPerson}'s phone number was deleted`, true)
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter state={filterName} change={handleChange(setFilterName)} />
      <h3>Add a new</h3>
      <Form
        onSubmit={handleSubmit}
        nameState={newName}
        nameChange={handleChange(setNewName)}
        numberState={newNumber}
        numberChange={handleChange(setNewNumber)}
      />
      <h3>Numbers</h3>
      <Phonebook 
        persons={persons} 
        filterName={filterName}
        handler={handleDelete} 
      />
    </div>
  );
};

export default App;
