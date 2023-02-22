import { IPropertyCardShape, IPropertyResponseApiShape, IPropertyShape } from "interfaces";

export const formatPropertyToRequestShape = (propertyDbId: number, formData: IPropertyCardShape, isAvailable: boolean) => {
    const { name, city, street, propertyId } = formData;
    const requestData = {
        name,
        isAvailable,
        propertyId,
        city,
        street,
        id: propertyDbId,
    }

    return requestData;
}