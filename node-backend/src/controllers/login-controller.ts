import { NextFunction, Request, Response } from "express";
import { pool } from "../db-pool/pool";
import { IEmployee } from "../models/employee.interface";
import jsonwebtoken from "jsonwebtoken";

export const login = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    //return res.status(200).json({ email, password })


    const query = `SELECT * FROM employees 
                   WHERE email='${email}' 
                   AND password='${password}';`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error;
        }

        if (results.rowCount === 0) {
            const error = "Email is invalid or password does not exist.";
            return res.status(401).json({ error });
        }

        //if there's more than 1 user in DB that has the same email/pass (should not be possible)
        if (results.rowCount > 1) {
            const error = "Account server error..."
            return res.status(500).json({ error });
        }

        const employee: IEmployee = results.rows[0];

        let token;

        try {
            token = jsonwebtoken.sign(
                { employee_id: employee.employee_id, email: employee.email }, 
                process.env.SECRET,
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error = "Issue generating JWT..."
            return res.status(500).json({ error });
        }

        res.status(200).json({ token, employee });
    })
}