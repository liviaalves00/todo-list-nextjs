interface TodoItemProps {
    text: string;
    done: boolean;
}

export default function TodoItem({done, text}:TodoItemProps){
    return (
        <div>
            {text}
        </div>
    )   

}