export default function SelectionValidation(value, main ,sub1, sub2, sub3, sub4){
    return(value !== main && value !== sub1 && value !== sub2 && value !== sub3 && value !== sub4 && main !== '') ? true : false;
};