import { IUserShape } from "interfaces";
import jwt, { Secret } from "jsonwebtoken";

export const verifyToken = (token: string) => {
    const secret: Secret = process.env.SECRET ?? "invalid_key";

    try {
        const decoded: Omit<IUserShape, "password"> | any = jwt.verify(token, secret);
        return decoded;
    } catch (error: any) {
        console.error(`Error verifying token: ${error.message}`);
        return error.message;
    }
};
