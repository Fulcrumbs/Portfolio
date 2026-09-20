import axios from "axios";
import { DailyTable, Food} from "./HealthApp";

const api = axios.create({
    baseURL: import.meta.env.DEV ? '/' : import.meta.env.VITE_BACKEND_URL
})

export const fetchFood = async(): Promise<Food[]> => {
    try{
    const response = await api.get(`/api/foodDatabase`);
    return Array.isArray(response.data) 
        ? response.data
        : [];
    }
    catch(error){
        console.log(error);
        throw error;
    }
};

export const addFood = async() =>{
    try{

    }
    catch(error){
        console.log(error);
    }
}

export const fetchLogs = async(): Promise<DailyTable[]> => {
    try{
    const response = await api.get(`/api/IntakeLogs`);
    return Array.isArray(response.data) ? response.data : [];
    }
    catch(error){
        console.log(error);
        throw error;
    }
};

export const createLog = async() =>{
    try{

    }
    catch(error){
        console.log(error)
    }
}

export const deleteLog = async({selected}: {selected:DailyTable}) =>{
    try{
        await api.delete('', {params : {id: selected.id}});
    }
    catch(error){
       console.log(error) 
    }
}

export const updateLogs = async() =>{
    try{

    }
    catch(error){
        console.log(error)
    }
}

