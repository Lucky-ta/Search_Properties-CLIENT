export interface IUserShape {
    name?: string;
    email: string;
    password: string;
    id: number;
}

export interface IPropertyShape {
    name: string;
    propertyId: string;
    registeredBy: IUserShape;
    isAvailable: boolean;
    city: string;
    street: string;
}
