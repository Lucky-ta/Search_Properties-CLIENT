import { IPropertyResponseApiShape } from "interfaces";

export interface ICardModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    property: IPropertyResponseApiShape;
}
