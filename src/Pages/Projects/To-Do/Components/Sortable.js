import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'

export default function Sortable(props){
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
        id: props.id
    })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return(
        <button className="draggable" ref={setNodeRef} style={style} {...listeners} {...attributes} >
            {props.task.Title}
        </button>
    );
}