import { useSelector } from "react-redux";
import { ExampleState, Task } from "@/slices/todoSlice";

function TestPage() {
  const taskList = useSelector(
    (state: { todo: ExampleState }) => state.todo.taskList
  );
  // const todolist = useSelector((state) => state.todo.taskList)

  return (
    <div>
      <ul>
        {taskList.map((task: Task) => (
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
