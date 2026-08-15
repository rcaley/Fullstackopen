import Input from './Input'

const Filter = ({ state, change }) => {
  return (
    <div>
      filter: <Input state={state} change={change} />
    </div>
  );
};

export default Filter