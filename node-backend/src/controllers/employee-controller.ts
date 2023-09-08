import { Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IEmployee } from "../models/employee.interface";

export const getEmployees = (req: Request, res: Response) => {
    pool.query("SELECT * FROM employees", (error, results) => {
        if (error) {
            throw error;
        }
        const data: IEmployee[] =  [];

        results.rows.forEach((row) => {
            data.push({
                employee_id: row.employee_id,
                first_name: row.first_name,
                last_name: row.last_name,
                email: row.email,
                password: row.password,
                department_id: row.department_id
            });
        })

        res.status(200).json(data);
    })
}