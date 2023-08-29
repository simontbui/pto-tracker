import axios, { AxiosResponse } from "axios";
import ISearchFilter from "./models/searchfilter.interface";

axios.defaults.baseURL = "http://localhost:5044/api";

const responseBody = (response: AxiosResponse) => response.data;

//insert axios.interceptors.response.use here for error handling later

const requests = {
    get: (url: string, params: object) => {
        if (url !== "departments/") {
            console.log("===REQUESTS===")
            console.log(url);
            console.log("===PARAMS===")
            console.log(params);
        }

        return axios.get(url, {params: params}).then(responseBody)
    }
}

export const EventDetails = {
    get: (searchFilter: ISearchFilter | {}) => requests.get("event-details", searchFilter)
}

export const Departments = {
    getAllDepartments: requests.get("departments/", {})
}