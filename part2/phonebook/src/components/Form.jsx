import Input from './Input'

const Form = (props) => {
  const { onSubmit, nameState, nameChange, numberState, numberChange } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <Input state={nameState} change={nameChange} />
      </div>
      <div>
        number: <Input state={numberState} change={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form