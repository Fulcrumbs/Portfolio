export default function save(key, data){
  if(Array.isArray(data)){
    localStorage.setItem(key, JSON.stringify(data))
    return
  }
    data.ID = data.ID || crypto.randomUUID();
    data.GoalStart = data.GoalStart || Date.now()
    const savedArray = JSON.parse(localStorage.getItem(key)) || [];
    savedArray.push(data) //push - adds start, pop - Removes last, shift - removes first, unshift - adds beginning,
    localStorage.setItem(key, JSON.stringify(savedArray));
    alert('Saved');
  };