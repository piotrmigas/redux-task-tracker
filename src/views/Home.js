import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { fetchTasks } from "../redux/taskSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const { tasks, showAddTask } = useSelector((state) => state);

  return (
    <>
      {showAddTask && <AddTask />}
      <Tasks tasks={tasks} />
    </>
  );
};

export default Home;
