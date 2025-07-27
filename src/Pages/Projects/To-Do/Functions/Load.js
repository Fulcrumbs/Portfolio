
export default function Load(key, setColumns){
    const data = localStorage.getItem(key)
    setColumns(data ? JSON.parse(data) : []);
    console.log('Loaded Data:', data)
};