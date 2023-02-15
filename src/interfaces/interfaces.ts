export interface IUserShape {
    name?: string;
    email: string;
    password: string;
}

export interface IPropertyShape {
    name: string;
    propertyId: string;
    registeredBy: IUserShape;
    isAvailable: boolean;
}


export interface IModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
}
