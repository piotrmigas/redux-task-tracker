import { useDispatch } from "react-redux";
import { toggleReminder, deleteTask } from "../redux/taskSlice";

const Task = ({ id, reminder, day, text }) => {
  const dispatch = useDispatch();

  return (
    <div onDoubleClick={() => dispatch(toggleReminder(id))} className={`${reminder ? "reminder" : ""} task`}>
      <h3>
        {text}
        <i onClick={() => dispatch(deleteTask(id))} className="fas fa-times" />
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
