import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IEvent } from "../models/event.interface";

export const getEvents = (req: Request, res: Response) => {
    pool.query("SELECT * FROM events", (error, results) => {
        if (error) {
            throw error;
        }
        const data: IEvent[] =  [];

        results.rows.forEach((row) => {
            data.push({
                event_id: row.event_id,
                employee_id: row.employee_id,
                date_start: row.date_start,
                date_end: row.date_end,
                reason: row.reason
            });
        })

        res.status(200).json(data);
    })
}