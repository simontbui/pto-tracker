import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5044/api";

const responseBody = (response: AxiosResponse) => response.data;

//insert axios.interceptors.response.use here for error handling later

export const eventDetails = {
    getAllEvents: (url: string = "event-details") => axios.get(url).then(responseBody)
}
