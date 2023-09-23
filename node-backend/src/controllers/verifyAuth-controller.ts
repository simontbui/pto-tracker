import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

export const verifyAuth = (req: Request, res: Response) => {
    const secret: string = process.env.SECRET as string;
    let token = req.cookies?.access_token;
 
    console.log("=========================")
    if (token) {
        try {
            const data = jsonwebtoken.verify(token, secret)
            console.log("SUCCESSFULLY VERIFIED")
            console.log(data)
            return res.status(200).json({ authenticated: true })
        } catch {
            console.log("COULD NOT VERIFY")
            return res.send(203).json({ authenticated: false });
        }
    }

    return res.send(203).json({ authenticated: false });
}