import { IPropertyShape } from "interfaces";

import AXIOS_API from "./api";

const handleError = (error: any) => {
  throw new Error(error.message);
};

export class PropertyApi {
  async createProperty(property: IPropertyShape, userToken: string) {
    try {
      const { data } = await AXIOS_API.post("/property", property, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async editProperty(propertyId: number, editedProperty: IPropertyShape) {
    try {
      const { data } = await AXIOS_API.put(
        `/property/${propertyId}`,
        editedProperty
      );
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async deleteProperty(propertyId: number) {
    try {
      const { data } = await AXIOS_API.delete(`/property/${propertyId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getOwnProperties(userId: string, userToken: string) {
    try {
      const { data } = await AXIOS_API.get(`/property/${userId}`, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getAllProperties(userToken: string) {
    try {
      const { data } = await AXIOS_API.get(`/property`, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      throw error
    }
  }
}
