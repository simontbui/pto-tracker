import { Moment } from "moment";

export interface IEventDetails {
    event_id?: number;
    first_name: string;
    last_name: string;
    title: string;
    date_start: Moment;
    date_end: Moment;
    department_name: string;
}