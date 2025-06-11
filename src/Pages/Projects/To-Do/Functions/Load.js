
export default function Load(key, setData){
    const data = localStorage.getItem(key)
    setData(data ? JSON.parse(data) : []); //set data
    console.log('Loaded Data:', data)
};