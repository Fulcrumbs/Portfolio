import { useDroppable } from "@dnd-kit/core";
import styles from "../TodoApp.module.css"

export default function Droppable(props){
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style ={
        color: isOver ? 'green' : undefined,
    };
    return(
        <div className={styles.droparea} ref={setNodeRef} style={style}> 
            {props.children}
        </div>
    );
}