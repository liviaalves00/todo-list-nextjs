"use client"

import TodoItem from "@/components/TodoItem";
import { Task } from "./types/task";
import { TodoList } from "@/components/TodoList";
import { CreateTask } from "@/components/CreateTask";
import { useState } from "react";

const data: Task[] = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Learn TypeScript", done: true },
  { id: 3, text: "Learn Next.js", done: false },
];

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>(data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl">
        Todo list
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CreateTask setTasks={setTasks} tasks={tasks}  />
        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}
