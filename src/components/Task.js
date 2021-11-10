import { BiX } from 'react-icons/bi';

export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <BiX style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}