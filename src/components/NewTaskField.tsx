import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const NewTaskField = ({ todo, setTodo }: Props) => {
  return (
    <form action="" className="new-task-input-form">
      <input
        type="input"
        placeholder="Enter a task"
        className="new-task-input-box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="new-task-submit-button">
        Add
      </button>
    </form>
  );
};

export default NewTaskField;
