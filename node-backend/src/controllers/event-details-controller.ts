import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IEventDetails } from "../models/event-details.interface";

export const getEventDetails = (req: Request, res: Response) => {
    pool.query("SELECT * FROM view_event_details ORDER BY first_name, last_name", (error, results) => {
        if (error) {
            throw error;
        }
        const data: IEventDetails[] =  [];

        results.rows.forEach((row) => {
            data.push({
                event_id: row.event_id,
                first_name: row.first_name,
                last_name: row.last_name,
                reason: row.reason,
                date_start: row.date_start,
                date_end: row.date_end
            });
        })

        res.status(200).json(data);
    })
}