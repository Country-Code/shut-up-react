import axios from "axios";
import { baseUrl } from "../Shared";

export default {
    getAxios: (ressource) => {
        let headers = {
            "Content-Type": "application/json",
        };
        const token = localStorage.getItem("token");
        if (token) {
            headers.Authorization = `Bearer ${token}`
        }

        return axios.create({
            baseURL: baseUrl + "/api/" + ressource,
            headers,
        });
    }
}