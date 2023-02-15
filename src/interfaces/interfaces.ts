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
    address: {
        city: string;
        street: string;
    }
}
