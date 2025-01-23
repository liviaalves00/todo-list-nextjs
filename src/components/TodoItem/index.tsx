"use client"

import { useState } from "react";
import CheckboxItem from "./checkboxItem";

interface TodoItemProps {
    text: string;
    done: boolean;
}

export default function TodoItem({done, text}:TodoItemProps){
    const [isDone, setIsDone] = useState(done);
    return (
        <div className={` flex text-xl items-center space-x-4 ${isDone && "line-through"}`}>
            <span>{text}</span>
            <CheckboxItem done={isDone} setDone={setIsDone} />
            <button className="text-red-500">Delete</button>
        </div>
    )   
}