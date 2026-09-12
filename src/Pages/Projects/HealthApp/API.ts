import axios from "axios";
import { DailyTable, Food} from "./HealthApp";

const api = axios.create({
    baseURL: import.meta.env.DEV ? '/' : import.meta.env.VITE_BACKEND_URL
})

export const fetchFood = async(): Promise<Food[]> => {
    const response = await api.get(`/api/foodDatabase`);
    return Array.isArray(response.data) 
        ? response.data
        : [];
};

export const fetchLogs = async(): Promise<DailyTable[]> => {
    const response = await api.get(`/api/IntakeLogs`);
    return Array.isArray(response.data) 
        ? response.data
        : [];
};


