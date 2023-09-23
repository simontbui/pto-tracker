import { Request, Response } from "express";

export const logout = (req: Request, res: Response) => {
    res.status(202).clearCookie("access_token").send({ Response: "JWT cleared..."});
}