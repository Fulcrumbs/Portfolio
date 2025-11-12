export default function SelectionValidation(value, artifact){
    return(
        value !== artifact.Piece.Stat && 
        value !== artifact.Sub1.Stat && 
        value !== artifact.Sub2.Stat && 
        value !== artifact.Sub3.Stat && 
        value !== artifact.Sub4.Stat && 
        artifact.Piece.Stat !== '') ? true : false;
};