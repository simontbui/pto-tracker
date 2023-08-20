import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5044/api";

const responseBody = (response: AxiosResponse) => response.data;

//insert axios.interceptors.response.use here for error handling later

const requests = {
    get: (url: string) => axios.get(url).then(responseBody)
}

export const EventDetails = {
    getAllEvents: requests.get("event-details/")
}

export const Departments = {
    getAllDepartments: requests.get("departments/")
}