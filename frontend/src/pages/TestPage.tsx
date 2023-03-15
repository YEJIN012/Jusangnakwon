import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";

function TestPage() {
  const taskList = useSelector(( state: RootState ) => state.todo.taskList);

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestPage;
