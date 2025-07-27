import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'
import { useState } from 'react';
import TodoView from '../Functions/TodoView';

export default function Sortable(props){
    const [isOpen, setIsOpen] = useState(false);
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: props.id,
    })

    const style = {
        ...props.style,
        transform: CSS.Transform.toString(transform),
        transition
    }
    
    return(
        <>
        <button onClick={() => setIsOpen(true)} className="osrsButton" ref={setNodeRef} style={style} {...listeners} {...attributes}>
           {props.task.Title}
        </button>
        <TodoView columnState={props.columnState} task={props.task} modalState={{isOpen:isOpen, setIsOpen:setIsOpen}}/>
        </>
    );
}