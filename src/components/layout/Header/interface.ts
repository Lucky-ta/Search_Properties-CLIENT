import { IUserShape } from "interfaces";

export interface IHeaderProps {
    user: Omit<IUserShape, "password">;
}