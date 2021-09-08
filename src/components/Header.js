import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title }) => {
  const { pathname } = useLocation();
  const { showAddTask } = useSelector((state) => state);

  return (
    <header>
      <h1>{title}</h1>
      {pathname === "/" && <Button text={showAddTask ? "Close" : "Add Task"} color={showAddTask ? "red" : "green"} />}
    </header>
  );
};

export default Header;
