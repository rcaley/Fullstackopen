const Phonebook = ({ persons, filterName, handler }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()),
  );
  return (
    <table>
      <tbody>
        {filteredPersons.map((person) => {
          return (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td>
                <button onClick={() => handler(person.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Phonebook;
