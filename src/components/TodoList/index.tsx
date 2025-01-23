import { Task } from "@/app/types/task";
import TodoItem from "../TodoItem";


  
interface TodoListProps {
    tasks: Task[];
}

export function TodoList({tasks}: TodoListProps) {

    return(
        <div>
            {
            tasks.map((task: Task) => (
                <TodoItem text={task.text} done={task.done} key={task.id} />
            ))
            }
        </div>
    )
}   