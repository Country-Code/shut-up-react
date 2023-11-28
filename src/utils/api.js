import axios from "axios";
import { baseUrl } from "../Shared";

export default {
    getAxios: (ressource) => {
        const headers = {
            "Content-Type": "application/json",
        };
    
        return axios.create({
            baseURL: baseUrl + "/api/" + ressource,
            headers,
        });
    }
}