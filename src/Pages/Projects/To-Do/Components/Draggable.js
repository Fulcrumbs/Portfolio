import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities'

export default function Draggable(props){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    })
    const style = {
        transform: CSS.Translate.toString(transform),
    }

    return(
        <button className="draggable" ref={setNodeRef} style={style} {...listeners} {...attributes} >
            {props.children}
        </button>
    );
}