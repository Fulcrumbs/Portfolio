
export default function save(key, data){
    data.ID = data.ID || Date.now();
    const savedArray =  JSON.parse(localStorage.getItem(key)) || [];
    savedArray.push(data) //push - adds start, pop - Removes last, shift - removes first, unshift - adds beginning,
    localStorage.setItem(key, JSON.stringify(savedArray));
    alert('Saved')
  };