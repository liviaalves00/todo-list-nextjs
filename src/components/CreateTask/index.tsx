import { Task } from "@/app/types/task";
import { useRef } from "react";

interface CreateTaskProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export function CreateTask({tasks, setTasks}: CreateTaskProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const onHandleClick = () => {
        if (!inputRef.current?.value) return;

        const newTask: Task = {
            id: tasks.length + 1,
            text: inputRef.current.value,
            done: false
        }

        setTasks([...tasks, newTask]);
    }

    return (
        <div className="py-4">
            <h1 className="text-lg font-bold mb-2">Create new task</h1>
            <input ref={inputRef} className="border border-gray-300 text-black rounded px-2 py-1 mb-1" type="text" placeholder="Task" />
            <button onClick={
                onHandleClick
            } className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">Create Task</button>
        </div>
    )
}