export interface IUserShape {
    name: string;
    email: string;
    password: string;
    id: number;
}

export interface IPropertyShape {
    name: string;
    propertyId: string;
    registeredByUser: IUserShape;
    isAvailable: boolean;
    city: string;
    street: string;
    id: number;
}

export interface IPropertyResponseApiShape {
    name: string;
    propertyId: string;
    registeredByUser: IUserShape;
    isAvailable: boolean;
    city: string;
    street: string;
    id: number;
}

export interface IPropertyCardShape {
    name: string;
    propertyId: string;
    city: string;
    street: string;
}
