import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div data-testid="task-list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Tasks;
