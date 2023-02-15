import { IPropertyShape } from "interfaces";

export interface ICardModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    property: IPropertyShape
}
