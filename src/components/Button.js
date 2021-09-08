import { useDispatch } from "react-redux";
import { toggleAddTask } from "../redux/taskSlice";

const Button = ({ text, color }) => {
  const dispatch = useDispatch();

  return (
    <button style={{ background: color }} className="btn" onClick={() => dispatch(toggleAddTask())}>
      {text}
    </button>
  );
};

export default Button;
