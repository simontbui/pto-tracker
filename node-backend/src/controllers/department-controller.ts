import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IDepartment } from "../models/department.interface";

export const getDepartments = (req: Request, res: Response) => {
    pool.query("SELECT * FROM departments ORDER BY department_name;", (error, results) => {
        if (error) {
            throw error;
        }
        let data: IDepartment[] = []
        results.rows.forEach((row) => {
            data.push({
                department_id: row.department_id,
                department_name: row.department_name
            });
        })

        res.status(200).json(data);
    })
}