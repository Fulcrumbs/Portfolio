export default function handleError(value, artifact){
if (artifact.Piece.Stat === ''){         
    alert ("Select Artifact Piece")
    value.target.value = '';
}
if (value !== artifact.Piece.Stat && 
    value !== artifact.Sub1.Stat && 
    value !== artifact.Sub2.Stat && 
    value !== artifact.Sub3.Stat && 
    value !== artifact.Sub4.Stat){
    alert("Duplicate Stat selected")
    value.target.value = ''
}};


//     alert("Invalid Entry: Select");
//     e.target.value = '';
// }
