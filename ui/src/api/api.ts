import axios, { AxiosResponse } from "axios";
import ISearchFilter from "./models/searchfilter.interface";

axios.defaults.baseURL = "http://localhost:5044/api";

const responseBody = (response: AxiosResponse) => response.data;

//insert axios.interceptors.response.use here for error handling later

const requests = {
    get: async (url: string, params: object = {}) => {
        if (url !== "departments/") {
            console.log("===REQUESTS===")
            console.log(url);
            console.log("===PARAMS===")
            console.log(params);
        }

        const response = await axios.get(url, { params: params });
        return responseBody(response);
    },
    post: async (url: string, body: Object = {}): Promise<any> => {
        const response = await axios.post(url, body);
        return responseBody(response);
    }
}

export const EventDetails = {
    get: (searchFilter: ISearchFilter | {}) => requests.get("event-details", searchFilter)
}

export const Departments = {
    getAllDepartments: requests.get("departments/")
}

export const LoginAuth = (email: string, password: string) => {
    return requests.post("login", { email, password })
}

// export const LoginAuth = {
//     post: (email: string, password: string) => requests.post("login", { email, password })
// }