
export default function Load(key, columns, setColumns){
    const data = localStorage.getItem(key)
    setColumns(data ? JSON.parse(data) : columns);
    console.log('Loaded Data:', data)
};