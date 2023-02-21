import { IUserShape } from "interfaces";

export interface IUserModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    user: Omit<IUserShape, "password">;
}