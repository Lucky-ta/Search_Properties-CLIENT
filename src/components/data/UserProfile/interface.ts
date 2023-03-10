import { IUserShape } from "interfaces";

export interface IUserProfileProps {
    user: Omit<IUserShape, "password">;
}