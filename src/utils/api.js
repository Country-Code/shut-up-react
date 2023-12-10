import axios from "axios";
import { baseUrl } from "../Shared";

export default {
    getAxios: (ressource) => {
        let headers = {
            "Content-Type": "application/json",
        };
        const userData = localStorage.getItem("auth-data");
        if (userData) {
            const token = JSON.parse(userData).token;
            headers.Authorization = `Bearer ${token}`
        }

        return axios.create({
            baseURL: baseUrl + "/api/" + ressource,
            headers,
        });
    }
}