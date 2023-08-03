import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IDepartment } from "../src/models/department.interface";

export const getDepartments = (req: Request, res: Response) => {
    pool.query("SELECT * FROM departments", (error, results) => {
        if (error) {
            throw error;
        }
        const data: IDepartment[] = results.rowCount > 0 ? results.rows : []
        console.log(data);
        
        res.status(200).json(data);
    })
}