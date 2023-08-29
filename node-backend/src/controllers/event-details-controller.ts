import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IEventDetails } from "../models/event-details.interface";
import _ from "lodash";

export const getEventDetails = (req: Request, res: Response) => {
    const filters = req.query;

    let query = "SELECT * FROM view_event_details" //ORDER BY first_name, last_name"

    if (!_.isEmpty(filters)) {        
        query += " WHERE 1=1"

        for (const [key, value] of Object.entries(filters)) {
            switch(key.toLowerCase()) {
                case "firstname":
                case "first_name":
                    query += ` AND first_name = '${value}'`;
                    break;
                case "lastname":
                case "last_name":
                    query += ` AND last_name = '${value}'`;
                    break;
                case "departmentname":
                case "department_name":
                    query += ` AND department_name = '${value}'`;
                    break;
            }
        }
    }

    query += " ORDER BY first_name, last_name;"
    
    pool.query(query, (error, results) => {
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
                date_end: row.date_end,
                department_name: row.department_name
            });
        })

        res.status(200).json(data);
    })
}